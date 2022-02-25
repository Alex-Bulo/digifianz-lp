const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, './public')))

app.listen(port, function(){
    console.log(`servidor corriendo en ${port}`);
})

app.get('/',function (req,res) {
    res.status(200).sendFile(path.resolve(__dirname,'./views/index.html'))
})
app.get('/cv',function (req,res) {
    res.status(200).sendFile(path.resolve(__dirname,'./public/images/Alejandro_Bullorini_CV-sp.pdf'))
})