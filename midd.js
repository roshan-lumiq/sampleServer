let redis = require('redis');


const client = redis.createClient({
    host: "127.0.0.1",
    port: 6379
})


client.on('error', (err) => console.log('Redis Client Error', err));

client.connect()
client.on('connect', data => console.log(`Redis server connected on ${client.port}`))

module.exports  = async(req,res,next)=>{

    console.log("inside this");


    let ip = await client.get('127.0.0.1')
    let ttl = await client.ttl('127.0.0.1')
    if (ttl == -2) {
        let ip = req.remoteAddress
        console.log(ip);

        client.setEx(('127.0.0.1'), 60, "3").then(D => console.log(D)).catch(er => console.error(er))

        next()
    }
    if (ip > 0 && ttl != -2) {

        client.decr('127.0.0.1')
        next()

    } else {

        res.send(`<h1>Ur Limit is exeed you can try after ${Math.round(ttl / 60)}mins</h1>`)
    }

}
