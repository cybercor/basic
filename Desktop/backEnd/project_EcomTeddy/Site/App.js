const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser"); //middleware parse dataTypes
const homeRouter = require("./Routers/homeRouter");
const productRouter = require("./Routers/productRouter");
const authRouter = require("./Routers/authRouter");
const clientRouter = require("./Routers/clientRouter");
const appError = require("./Utils/appError");

const app = express();
const vie = path.join(__dirname, "Views");
const publi = path.join(__dirname, "/Public");
const vendo = path.join(__dirname, "Vendor");
app.set("view engine", "ejs");
app.set("Views", vie);
app.use(express.static(publi));
app.use(express.static(vendo));
// app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false })); //là middleware tác vụ mã hóa html -> json
app.use(cookieParser());

//postman
app.use("/api/v1/products", homeRouter);

//client
app.use(homeRouter, productRouter, authRouter, clientRouter);

app.all("*", (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
