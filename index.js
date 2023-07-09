const app = require('express')();
app.listen(3000, () => console.log('Server Running'));
app.get('/skills', (req,res) =>{
    res.send('Javascript and Node');
    res.send({
        Javascript:10,
        Node: 10
    })
})