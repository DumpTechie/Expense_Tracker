const express = require("express");
const Joi = require("joi");
const getAll = require("../routes/getAll");
const getMonth = require("../routes/getByMonth");
const getUser = require("../routes/getByUsers");
const create = require("../routes/create");
const router = express.Router();
router.use("/all", getAll);
router.use("/month", getMonth);
router.use("/user", getUser);
router.use("/create", create);
router.get("/swear", (req, res) => {
  res.send("fuck u!!");
});
router.get("/soo", (req, res) => {
  res.send("lool");
});
router.post("/sum", (req, res) => {
  const schema = Joi.object({
    arr: Joi.string().min(5).required(),
  });

  const result = schema.validate(req.body);
  console.log(result);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }
  console.log(req.body.arr);
  let value = JSON.parse(req.body.arr);
  value = value.reduce((partialSum, a) => partialSum + a, 0);
  console.log(typeof value);
  res.send("Sum is " + value + " !");
});

module.exports = router;
