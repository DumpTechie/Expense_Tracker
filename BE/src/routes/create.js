const express = require("express");
const createMongo = require("../Dao/createMongo");
const Joi = require("joi");

const create = express.Router();

create.post("/", (req, res) => {
  console.log(req.body);
  console.log(1);
  const schema = Joi.object({
    title: Joi.string().min(5).required(),
    date: Joi.string().required(),
    type: Joi.string().required(),
    amount: Joi.number().required(),
    user: Joi.string().required(),
  });
  const result = schema.validate(req.body);
  console.log("result:" + result);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }
  createMongo.addData(req, res);
});
module.exports = create;
