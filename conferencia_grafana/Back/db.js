const mysql = require("mysql");
require("dotenv").config({ path: "./env/.env" });

const db = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect(() => {
  console.log("Database connected!");
});

const insertData = async (sensor, data) => {
  console.log("data: ", data);
  return new Promise((resolve, reject) => {
    db.query(`insert into ${sensor} set data = ?`, [data], (err, result) => {
      if (err) {
        console.log("Error: ", err, "---", result);
        reject(err);
      } else {
        console.log("data saved!");
        resolve();
      }
    });
  });
};

const insertDataC = async (dataX, dataY, dataZ) => {
  return new Promise((resolve, reject) => {
    db.query(
      `insert into sensorC (dataX,dataY,dataZ) values(?,?,?); `,
      [dataX, dataY, dataZ],
      (err, result) => {
        if (err) {
          console.log("Error: ", err, "---", result);
          reject(err);
        } else {
          console.log("data saved!");
          resolve();
        }
      }
    );
  });
};

module.exports = { db, insertData, insertDataC };
