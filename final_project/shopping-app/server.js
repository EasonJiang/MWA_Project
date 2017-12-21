const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const app = express();

const api = require('./routes/api');
const index = require('./routes/index');

//view Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
//Angular DIST outout folder
// app.use(express.static(path.join(__dirname,'client')));
app.use(express.static(path.join(__dirname,'dist')));
//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//API location
app.use('/api',api);
// app.use('/',index);
//send all other request to the Angular application
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port',port);

const server = http.createServer(app).listen(port,()=>{
    console.log(`Running on localhost:${port}`)
});

