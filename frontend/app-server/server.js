const express = require('express');
const path = require('path');

const app = express();

app.set('views', 'react');

app.use(express.static(path.join(__dirname, 'react')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'react', 'index.html'));
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Server listening on port: ', process.env.PORT || 8080);
    const testFolder1 = __dirname;
    const fs = require('fs');
    console.log( testFolder1);
    fs.readdirSync(testFolder1).forEach(file => {
        console.log(file);
    });

    const testFolder2 = __dirname+'/react';
    console.log("\n\n");

    fs.readdirSync(testFolder2).forEach(file => {
        console.log(file);
    });

    console.log("Okay...");

});
