const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((conn) => {
    if (conn) {
      console.log("Connected to Database success");
      return;
    }
    console.log("Connect failed");
  });
