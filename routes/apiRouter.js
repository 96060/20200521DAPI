var express = require('express');
var router = express.Router();

// arrow function ()=>{}
router.get('/main', (res, req)=>{
    res.render('index');
});

router.get('/daejeon', (req, res)=>{
    res.render('main', {data : "잘 들어온 데이터"});
});

module.exports = router; // middleware(js)에서 exports하는 법