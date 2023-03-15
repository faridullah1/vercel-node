const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to Node JS deployment to vercel'
    });
});

const port = process.env.NODE_ENV || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;