let redis = require('redis');
let express = require('express')
let mi = require('./midd')

let app = express()

let PORT = 3500;

var cors = require('cors')

app.use(cors())


app.get('/bills/documents/CLAIM200', async (req, res) => {

    let a ={
        "status": true,
        
        "statusCode": 200,
        
        "error": false,
        
        "errorData": null,
        
        "data":{
    
    "_id": "63b3d04822ab687edf089cfd",
    
    "claim_id": "CLAIM200",
    
    "documents": [
        {
          docCategory: 'CAT001',
          docClass: 'CLS001',
          docPath: 'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/100615/left-rear-three-quarter27.jpeg?isig=0&wm=0&q=75'
        },
        {
          docCategory: 'CAT001',
          docClass: 'CLS001',
          docPath: 'https://media.istockphoto.com/id/490736905/photo/meenakshi-hindu-temple-in-madurai-tamil-nadu-south-india.jpg?s=612x612&w=0&k=20&c=OlOLvdryIdkdyKcY9gRPsM1RZa5HiP6QBr2JVAIvPb0='
        },
        {
          docCategory: 'CAT001',
          docClass: 'CLS001',
          docPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&usqp=CAU'
        },
        {
          docCategory: 'CAT001',
          docClass: 'CLS001',
          docPath: 'https://tinyjpg.com/images/social/website.jpg'
        },{
          docCategory: 'CAT001',
          docClass: 'CLS002',
          docPath: 'https://www.rmg.co.uk/sites/default/files/styles/max_width_1440/public/2022-07/STScI-01G79RF5F5TPZJSDT3Y640XNQ1-southern-ring-nebula.jpg?itok=CLW7jhNZ'
        },
        {
          docCategory: 'CAT001',
          docClass: 'CLS002',
          docPath: 'https://imgv3.fotor.com/images/homepage-feature-card/adjust-image.jpg'
        },
        {
          docCategory: 'CAT001',
          docClass: 'CLS002',
          docPath: 'https://media.istockphoto.com/id/1281783803/photo/mountains-velliangiri-view-with-blue-sky-and-green-fores.jpg?s=612x612&w=0&k=20&c=25epzQEXtzNmGMtUoBa13SpHZ4rGz2HDLuHfWaUa51o='
        }, {
          docCategory: 'CAT001',
          docClass: 'CLS002',
          docPath: 'https://www.w3schools.com/css/img_forest.jpg'
        },{
          docCategory: 'CAT001',
          docClass: 'CLS003',
          docPath: 'https://pixlr.com/images/index/remove-bg.webp'
        }, {
          docCategory: 'CAT001',
          docClass: 'CLS003',
          docPath: 'https://openai.com/content/images/2021/01/2x-no-mark-1.jpg'
        },
        {
          docCategory: 'CAT001',
          docClass: 'CLS003',
          docPath: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg'
        },
        {
          docCategory: 'CAT001',
          docClass: 'CLS004',
          docPath: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        }],
    
    "__v": 0
    
    }
    }

    res.status(200).json(a)

})

app.get('/bills/lookup',(req,res)=>{
    res.status(200).json({
        data:{
          CLS001 : 'Hospital Bills',
          CLS002 : 'Pharmacy Bills',
          CLS003 : 'Investigation Bills',
          CLS004 : 'Receipts',
          OTH    : 'Ohers'
        }
      })
}
)

app.post('/bills/documents-update',async(req,res)=>{

    console.log(req);
    return res.status(200).json(req.body)
})


app.listen(PORT, () => console.log(`Express server is listning on ${PORT}`))





