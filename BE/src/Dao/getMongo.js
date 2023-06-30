require("./connect");
const dataSchema = require("../schema/dataSchema");
const dbData = {
  allData: (type, value) => {
    // console.log(req.body);
    const result = dataSchema.find({});
    console.log(result);
    return result;
  },
};
module.exports = dbData;
