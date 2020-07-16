const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/shopping-tracking-list/dist'));
app.listen(process.env.PORT || 8080);
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/shopping-tracking-list/dist/shopping-tracking-list/index.html'))
})

console.log('Console Listening!');