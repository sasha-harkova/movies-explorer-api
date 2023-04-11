require('dotenv').config();

let PORT;
let DB_ADDRESS;
let JWT_SECRET;

if (process.env.NODE_ENV === 'production') {
  PORT = process.env.PORT;
  DB_ADDRESS = process.env.DB_ADDRESS;
  JWT_SECRET = process.env.JWT_SECRET;
} else {
  PORT = 3000;
  DB_ADDRESS = 'mongodb://127.0.0.1:27017/mestodb';
  JWT_SECRET = 'secret-key';
}

module.exports = {
  PORT,
  DB_ADDRESS,
  JWT_SECRET,
};
