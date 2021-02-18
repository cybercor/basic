const fs = require("fs");
const customerModel = require("../Models/customerModel");
const appError = require("../Utils/appError");
const bcrypt = require("bcrypt");

class authController {
  constructor() {}

  getSignup(req, res) {
    res.render("Register", { title: "SignUpForm" });
  }

  async postSignup(req, res, next) {
    const { fullName, email, phone, password, rePassword } = req.body;
    let queryFullName, queryEmail, queryPhone, queryPassword;
    let listCus = [];
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const regexPassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"; //Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số:

    if (!fullName.length >= 3) {
      next(new appError(`${fullName} is not valid`, 404));
    }
    queryFullName = fullName;
    queryEmail = email.match(regexEmail)
      ? email
      : next(new appError(`${email} is not valid`, 404));

    queryPhone =
      typeof phone != Number ? parseInt(phone, 10) : phone.length <= 10;

    const customers = await customerModel
      .find()
      .select("email")
      .orFail("No docs customers");
    customers.filter((ele, index) => {
      queryEmail =
        email != ele.email
          ? email
          : next(new appError(`${email} duplicated`, 404));
    });

    // password.match(regexPassword);
    queryPassword =
      password.length >= 6
        ? password
        : next(new appError(`Regex Password failed`, 404));

    queryPassword =
      rePassword === queryPassword
        ? rePassword
        : next(new appError(`Confirm rePassword failed`, 404));

    const newCus = await customerModel.create({
      // validateBeforeSave: true,
      fullName: queryFullName,
      email: queryEmail,
      phone: queryPhone,
      password: queryPassword,
    });
    if (newCus) {
      listCus.push(newCus);
      return res.redirect(this.getSignin);
    }
  }

  async getSignin(req, res) {
    res.render("Login", { title: "Sign in & Sign up Form" });
  }

  async postLogin(req, res, next) {
    const { email, password } = req.body;
    const timeLive = 24 * 60 * 60 * 1200; //time living cookie
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(regexEmail)) {
      next(new appError(`Email không hợp lệ`, 404));
    }
    const findUser = await customerModel
      .findOne({ email: email })
      .select("-__v");

    if (await bcrypt.compare(password, findUser.password)) {
      //name and value
      res.cookie("name", findUser.fullName, {
        maxAge: timeLive,
        httpOnly: true, //httpOnly bảo mật
      });
      return res.redirect("/");
    }
  }

  logout(req, res) {
    if (req.cookies) {
      // delete req.cookies; //method delete ko hoạt động trong server
      res.cookie("name", "", { maxAge: 1 });
      return res.redirect("/");
    }
  }
}
module.exports = new authController();
