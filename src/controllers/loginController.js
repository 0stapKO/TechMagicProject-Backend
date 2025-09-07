const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        const token = jwt.sign({ user }, process.env.JWT_SECRET); 
        res.status(200).send({
            token: token,
            role: user.role,
            id: user.id
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}
module.exports = { login };
