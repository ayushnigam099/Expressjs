// const express= require('express');
// let exp= express();

// exp.get('/', (req,res)=>{
  
//     res.send( { key1: "value" });
// })

// exp.listen(3000, ()=> {
//     console.log("First express code");
// })

const express= require('express');
const bodyParser= require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCT</button></form>')
});
app.use('/product', (req,res,next)=>{
    console.log(req.body);
    res.redirect("/");

})


app.use('/', (req,res,next)=>{
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');

})
app.listen(3000);
 