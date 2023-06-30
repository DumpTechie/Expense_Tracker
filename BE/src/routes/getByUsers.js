const express = require("express");
const data = require("../../utills/mockDbData");
const dbData = require("../Dao/getMongo");
const getUser = express.Router();
getUser.get("/:user", (req, res) => {
  dbData.allData("user", req.params.user).then((Data) => {
    const resultData = Data.filter((row) => {
      console.log(row, req.params.user);
      return row["user"] === req.params.user;
    });

    res.send(resultData);
  });
});
getUser.get("/stats/:user", (req, res) => {
  dbData.allData("user", req.params.user).then((Data) => {
    console.log(Data);
    const resultData = Data.filter((row) => {
      // console.log(row);
      return row["user"] === req.params.user;
    });
    const result = resultData.reduce(
      (acc, val) => acc + parseInt(val.amount),
      0
    );
    console.log(result);
    const type = resultData.reduce((acc, val) => {
      if (acc[val.type]) {
        acc[val.type] += parseInt(val.amount);
      } else {
        acc[val.type] = parseInt(val.amount);
      }
      return acc;
    }, {});
    const final = { total: result, type: type };
    console.log(final);
    res.send(final);
  });
});
getUser.post("/filter/:user", (req, res) => {
  const result = data.filter((row) => {
    console.log(row);
    return row["user"] === req.params.user && row[query.col] === query.value;
  });
  res.send(result);
});
module.exports = getUser;
