if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const config = {
    DB_URI: process.env.DB_URI,
    PORT: process.env.PORT 
};

module.exports = config;