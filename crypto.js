const bcrypt = require('bcrypt');

const saltRounds = 12;

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password,salt);
    return hash
}

async function checkPassword(password,hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = {hashPassword, checkPassword};