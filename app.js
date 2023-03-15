const express = require('express');
const app = express();

app.use(express.json());

const users = [{
    'name': 'faridullah',
    'email': 'faridullah996@gmail.com'
}];

const home = require('./routes/home');

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to Node JS deployment to vercel'
    });
});

app.use('/api/home', home);

module.exports = app;