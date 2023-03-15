const express = require('express');
const dotEnv = require('dotenv');

const app = express();

dotEnv.config({ path: './config.env'});
app.use(express.json());

const userRouter = require('./routes/usersRoutes');

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to Node JS deployment to vercel'
    });
});

app.use('/api/users', userRouter);

module.exports = app;