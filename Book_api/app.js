const express=require('express');
const app=express();
const port=8000;

app.use(express.urlencoded({extended:true}));
const routes=require("./routes.js");
app.use(express.json());
app.use(routes);





app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})