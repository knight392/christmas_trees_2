const express = require('express');
const app = new express();//创建express实例

app.use(express.static('static'));

app.get('/check_pwd', (req, res) => {
    const pwd = req.query.pwd;
    res.json({
        res: pwd === '老男人的小仙女'
    })
});

app.get('/img_list', (req, res) => {
    res.json([
        'skfjlksfj',
        'slkfjlsfj'
    ])
});
app.listen(9001);
console.log('listen on port 9001');