const { User } = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();

    res.status(200).json({
        status: 'success',
        data: {
            users
        }
    });
};