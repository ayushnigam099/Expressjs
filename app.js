// const express= require('express');
// let exp= express();

// exp.get('/', (req,res)=>{
  
//     res.send( { key1: "value" });
// })

// exp.listen(3000, ()=> {
//     console.log("First express code");
// })

const express= require('express');
const app= express();
const bodyParser= require('body-parser');

const adminRouter= require('./routes/admin');

const shopRouter= require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRouter);
app.use(shopRouter);

app.use((req,res,next)=>
{
 res.status(404).send("Page Not Found");
})

app.listen(3000);
 