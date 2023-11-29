
const mongoose = require('mongoose');
const dbURL = process.env.DBURL;

module.exports = () => {
  try {
    mongoose.connect(dbURL);
    console.log('Connected to database sucessfully...');
  } catch (error) {
    console.log(`Could not connect to database ${error}`);
  }
};
