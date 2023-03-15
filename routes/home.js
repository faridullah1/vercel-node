const express = require('express');
const router = express.Router();

home = (req, res) => {
    res.status(200).json({
        message: 'Home route working'
    })
}

router.route('/').get(home);

module.exports = router;