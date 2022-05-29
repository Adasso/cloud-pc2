const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');
const keys = require('./config/key');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/students');


mongoose.connect(keys.mongoURI, {useNewUrlParser: true}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.use( express.static(__dirname + '/public'))

app.get('/', (req,res)=>{
    res.render('index')
})

app.use('/students/', studentRoutes)



app.listen(port,()=>{
    console.log('Server has been started!')
})