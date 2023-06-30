require("./connect");
const dataSchema = require("../schema/dataSchema");
const create = {
  addData: (req, res) => {
    console.log(req.body);
    const data1 = new dataSchema(req.body);
    data1.save().then(() => {
      console.log("saved");
    });
    res.send("success");
  },
};
module.exports = create;
