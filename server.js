const express = require('express');
const app = new express();//创建express实例

app.use(express.static('static'));
app.listen(9001);
console.log('listen on port 9001');