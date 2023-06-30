const mongoose = require("mongoose");
const dataSchema = require("../schema/dataSchema");
console.log(process.env);
mongoose.connect(
  process.env.MONGO_URL,
  () => {
    console.log("conected");
  },
  (e) => {
    console.log("ERROR :" + e);
  }
);
// const run = async () => {
//   data1.save().then(() => {
//     console.log("saved");
//   });
// };
// const data1 = new dataSchema({
//   title: "new sneakers",
//   date: "20-06-2022",
//   user: "vinoth",
//   amount: "1068",
//   type: "clothing",
// });
