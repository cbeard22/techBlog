const { User } = require('../models');

const userData = [
    {
        username: "bigboi",
        email: "bigboi@gmail.com",
        password: "p@ssword1"
    }
]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;