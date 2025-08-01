const jwt = require('jsonwebtoken');

const generateToken = (email,password) => {
    return jwt.sign({ email, password }, "mazedulislam", {
        expiresIn: '30d',
    });
};
const verifyToken = (token) => {
    return jwt.verify(token, "mazedulislam",function(err, decoded) {
        if (err) {
            return false;
        }
        return decoded;

    });
}
module.exports = { generateToken };