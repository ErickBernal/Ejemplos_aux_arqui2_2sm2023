const { db, insertData, insertDataC } = require("./db");

const idMin = 10;
const idMax = idMin * 3;

const getRandomNumber = (min, max) => {
  const max2 = max + 100;
  return Math.floor(Math.random() * (max2 - min + 1)) + min;
};

const Modelo1 = async () => {
  const min = idMin;
  const max = idMax;
  for (let x = min; x <= max; x++) {
    if (x % 2 === 0) {
      //par
      await insertData("sensorA", x);
    }
    if (x % 2 !== 0) {
      //impar
      await insertData("sensorB", x);
    }
    if (x % 10 === 0) {
      //multiplo de 10
      await insertDataC(x, x * 3, x * 5);
    }
  }
  console.log("--------------------------------------------");
};

const Modelo2 = async () => {
  const min = idMax + 1;
  const max = idMax + 100;
  for (let x = min; x <= max; x++) {
    if (x % 2 === 0) {
      //par
      await insertData("sensorA", getRandomNumber(x, max));
    }
    if (x % 2 !== 0) {
      //impar
      await insertData("sensorB", getRandomNumber(x, max));
    }
    if (x % 10 === 0) {
      //multiplo de 10
      await insertDataC(
        getRandomNumber(x, max),
        getRandomNumber(x * 3, max),
        getRandomNumber(x * 5, max)
      );
    }
  }
  console.log("--------------------------------------------");
};

module.exports = { Modelo1, Modelo2 };
