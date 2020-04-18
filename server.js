const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/form',function(req,res){
  res.sendFile(path.join(__dirname+'/form.html'));
});

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/fonts'));

app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Running at Port 8080');