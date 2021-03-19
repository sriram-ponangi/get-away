/*
* Authors: 
    - Sriram, Ponangi
*/
const express = require('express');
const path = require('path');

const app = express();

app.set('views', 'react');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Server listening on port: ', process.env.PORT || 8080);
    const testFolder1 = __dirname;
    const fs = require('fs');
    console.log( testFolder1);
    fs.readdirSync(testFolder1).forEach(file => {
        console.log(file);
    });

    const testFolder2 = __dirname+'/build';
    console.log("\n\n");

    fs.readdirSync(testFolder2).forEach(file => {
        console.log(file);
    });

    console.log("\n Application Started Correctly \n");

});
