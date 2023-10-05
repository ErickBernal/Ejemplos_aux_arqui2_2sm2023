const { db } = require("./db");

const cleanTabSensorA = async (req, res) => {
  db.query(`DELETE FROM sensorA;`, (err, result) => {
    if (err) {
      console.log("Error: ", err, "---", result);
      return res.status(400).send({
        message: err,
      });
    } else {
      console.log("Tab sensorA clean!");
    }
  });
};

const cleanTabSensorB = async (req, res) => {
  db.query(`DELETE FROM sensorB;`, (err, result) => {
    if (err) {
      console.log("Error: ", err, "---", result);
      return res.status(400).send({
        message: err,
      });
    } else {
      console.log("Tab sensorB clean!");
    }
  });
};

const cleanTabSensorC = async (req, res) => {
  db.query(`DELETE FROM sensorC;`, (err, result) => {
    if (err) {
      console.log("Error: ", err, "---", result);
      return res.status(400).send({
        message: err,
      });
    } else {
      console.log("Tab sensorC clean!");
    }
  });
};

const Clean = async (req, res) => {
  cleanTabSensorA();
  cleanTabSensorB();
  cleanTabSensorC();
};

module.exports = { Clean };
