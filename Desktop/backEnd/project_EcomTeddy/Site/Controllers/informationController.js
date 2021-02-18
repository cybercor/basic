const appError = require("../Utils/appError");
const customerModel = require("../Models/customerModel");
const bcrypt = require("bcrypt");

class informationController {
  constructor() {
    this.title =
      "Mua Gấu Bông - Shop Gấu Bông TPHCM - Cửa Hàng Gấu Bông Cao Cấp";
  }

  async beforeCustomizeInformation(req, res) {
    let cook, findUserId;
    const title =
      "Mua Gấu Bông - Shop Gấu Bông TPHCM - Cửa Hàng Gấu Bông Cao Cấp";
    cook = req.cookies.name ? req.cookies.name : null;

    if (cook) {
      findUserId = await customerModel
        .findOne({ fullName: cook })
        .select("-__v -password")
        .orFail(new appError("No docs as customerModel", 404));
    }
    return res.render("changeInformation", {
      title,
      cook,
      findUserId,
    });
  }

  async afterCustomizeInformation(req, res, next) {
    const { _id, fullName, phone, email, address1 } = req.body;
    let queryFullName, queryEmail, queryPhone;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // if (fullName.length >= 3 && fullName.trim()) {
    //   queryFullName = fullName;
    // }
    queryPhone =
      typeof phone != Number ? parseInt(phone, 10) : phone.length <= 10;
    queryEmail = email.match(regexEmail)
      ? email.toLowerCase()
      : next(new appError(`Authentication ${regexEmail} failed`));
    const updateInformation = await customerModel
      .findByIdAndUpdate(
        _id,
        {
          fullName,
          email: queryEmail,
          phone: queryPhone,
          address1,
        },
        { new: true }
      )
      .orFail("Update customer failed");
    if (updateInformation) {
      return res
        .status(200)
        .redirect("/ChangeInformation/account=updateInformation");
    }
  }

  async beforeCustomizePassword(req, res) {
    let cook, findUserId;
    const title =
      "Mua Gấu Bông - Shop Gấu Bông TPHCM - Cửa Hàng Gấu Bông Cao Cấp";
    cook = req.cookies.name ? req.cookies.name : null;
    if (cook) {
      findUserId = await customerModel
        .findOne({ fullName: cook })
        .select("password")
        .orFail(new appError("No docs as customerModel", 404));
    }

    return res.render("changePassword", { title, cook, findUserId });
  }

  async afterCustomizePassword(req, res, next) {
    const { password_old, newPassword, newPassword_confirmation } = req.body;
    let newUserPassword;
    newUserPassword =
      newPassword.length >= 6 && newPassword.length <= 20
        ? newPassword
        : next(new appError(`${newPassword.length} less character`, 404));

    newUserPassword = (await bcrypt.compare(newUserPassword, password_old))
      ? next(new appError(`Newpassword dupplicated`, 404))
      : newUserPassword;

    newUserPassword =
      newUserPassword === newPassword_confirmation
        ? await bcrypt.hash(newUserPassword, 12)
        : next(new appError(`Confirm Password failed`, 404));

    const updatePasswordUser = await customerModel
      .updateOne({ password: newUserPassword })
      .orFail("Update Password Error Validator or Write File docs failed");
    if (updatePasswordUser) {
      return res
        .status(200)
        .redirect("/ChangeInformation/account=updatePassword");
    }
  }
}

module.exports = new informationController();
