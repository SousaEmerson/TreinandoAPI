const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(router);

    app.listen('8080', (err) => {
        if (err) console.error(err)
        console.log('server running on port 8080')
    })