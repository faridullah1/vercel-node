const users = [{
    'name': 'faridullah',
    'email': 'faridullah996@gmail.com'
}];

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            users
        }
    });
};