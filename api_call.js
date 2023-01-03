let axios = require('axios')
let requester = async()=>{

    to = Date.now() + 7000

    while(to>=Date.now()){
        console.log(Date.now())
    }
    res =  await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return res

}
requester().then(d=>console.log(d))

