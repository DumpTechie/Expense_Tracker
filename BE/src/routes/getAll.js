const express = require("express");
const createMongo = require("../Dao/getMongo");
const getAll = express.Router();
getAll.get("/", (req, res) => {
  const data = createMongo.allData(req, res);
  data.then((results) => {
    console.log("hii");
    console.log(results);
    res.send(results);
  });
});
getAll.get("/stats", (req, res) => {
  const data = createMongo.allData(req, res);
  data.then((results) => {
    const result = results.reduce((acc, val) => acc + parseInt(val.amount), 0);
    const type = results.reduce((acc, val) => {
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
getAll.post("/filter", (req, res) => {
  const data = createMongo.allData(req, res);
  data.then((results) => {
    const query = req.body;
    console.log(query);
    const result = results.filter((row) => {
      console.log(row);
      return row[query.col] === query.value;
    });
    res.send(result);
  });
});
module.exports = getAll;
