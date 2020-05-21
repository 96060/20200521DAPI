var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();
// require('ejs');

// set -> 설정 메소드
app.set('views', path.join(__dirname+'/views'));
// views라는 이벤트를 실행 (views를 기본 설정으로 보게 한다)
// path = 경로 지정 함수
// __dirname 다이렉트 네임 <- 현재 디렉토리 보여 줌
// __dirname+'/views' <- 현재에서 views 폴더까지 지정

app.set('view engine', 'ejs');
// ejs <- app의 라이브러리

// app.use();

app.get('/', function(request, response) {
    console.log(request);
    response.render('./index') // set 'ejs' 덕분에 index.뒤처리 안 해도 됨
});
// listen(포트, url, baklog, callback)
app.listen(8080, function() {
    console.log("Server is starting at http://localhost:8080");
} );

// C+` 터미널 열기