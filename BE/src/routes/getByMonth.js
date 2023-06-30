const express = require("express");
const { date } = require("joi");
const data = require("../../utills/mockDbData");
const dbData = require("../Dao/getMongo");

const getMonth = express.Router();
getMonth.get("/:month", (req, res) => {
  dbData.allData("user", req.params.user).then((Data) => {
    const result = Data.filter((row) => {
      console.log(row);
      return row["date"].split("-")[1] === req.params.month;
    });
    res.send(result);
  });
});
getMonth.get("/stats/:month", (req, res) => {
  console.log("started");
  dbData.allData("user", req.params.user).then((Data) => {
    const resultData = Data.filter((row) => {
      console.log(row);
      return row["date"].split("-")[1] === req.params.month;
    });
    const result = resultData.reduce(
      (acc, val) => acc + parseInt(val.amount),
      0
    );
    const type = resultData.reduce((acc, val) => {
      if (acc[val.type]) {
        acc[val.type] += parseInt(val.amount);
      } else {
        acc[val.type] = parseInt(val.amount);
      }
      return acc;
    }, {});
    const final = { total: result, type: type };
    res.send(final);
  });
});
getMonth.post("/filter/:month", (req, res) => {
  const query = req.body;
  const result = data.filter((row) => {
    console.log(row);
    return (
      row["date"].split("-")[1] === req.params.month &&
      row[query.col] === query.value
    );
  });
  res.send(result);
});
module.exports = getMonth;
