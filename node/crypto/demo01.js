#!/usr/bin/env node
// !/usr/bin/node是告诉操作系统执行这个脚本的时候，调用/usr/bin下的node解释器
var http = require('http');
var crypto = require('crypto');


http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  if (request.url !== '/favicon.ico') { // 清除第二次访问
    response.end('');
  }
}).listen(8000);
console.log('Server running at http:// 127.0.0.1:8000/');




// use secret to encrypt string
// 加密
function encrypt(str, secret) {
  var cipher = crypto.createCipher('aes192', secret);
  var enc = cipher.update(str, 'utf8', 'hex');
  enc += cipher.final('hex');
  console.log('enc is +enc', enc);

  return enc;
}
// 解密
function decrypt(str, secret) {
  var decipher = crypto.createDecipher('aes192', secret);
  var dec = decipher.update(str, 'hex', 'utf8');
  dec += decipher.final('utf8');
  console.log('dec is +dec', dec);
  return dec;
}

encrypt('leekwen', '123455'); //  879997065d8297f4eeae3818ae7cc958
decrypt('879997065d8297f4eeae3818ae7cc958', '123455'); // leekwen 


// const cert = require('crypto').Certificate();
// const spkac = getSpkacSomehow();
// const challenge = cert.exportChallange(spkac);
// console.log(challenge.toString('utf-8'));

const cert = require('crypto').Certificate();
const spkac = getSpkacSomehow();
const challenge = cert.exportChallenge(spkac);
console.log(challenge.toString('utf8'));

// ReferenceError: getSpkacSomehow is not defined 低版本不支持