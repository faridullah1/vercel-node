const express = require('express');
const app = express();

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