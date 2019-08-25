const connection = require('../config/connection');

const addCity = (data) => {
  const sql = {
    text: 'INSERT INTO cities(name,city) VALUES($1,$2)',
    values: [
      data.name,
      data.city,
    ],
  };
  return connection.query(sql);
};

module.exports = addCity;
