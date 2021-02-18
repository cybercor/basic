const fs = require("fs");
const productModel = require("../Models/productModel");
const customerModel = require("../Models/customerModel");
const appError = require("../Utils/appError");

class homeController {
  constructor() {}

  //return array
  async createProduct(req, res, next) {
    const products = await productModel.create(req.body);
    if (!products) {
      next(new appError(400, "Create Data From PostMan Failed"));
    }
    return res.status(200).json({
      status: "Create success",
      result: products.length,
      data: { listProducts: products },
    });
  }

  // //return array
  async getAllProduct(req, res, next) {
    let time, cook, findUserId;
    let createComma = new Intl.NumberFormat();
    const numVnd = ["000"];
    const number = 1;
    const path = "/api/v1/products";
    const title =
      "Mua Gấu Bông - Shop Gấu Bông TPHCM - Cửa Hàng Gấu Bông Cao Cấp";
    const query = productModel;

    let featuredProducts = await query
      .find({ $or: [{ featured: number }, { sale_price: { $gte: number } }] })
      .limit(4)
      .select("-_id -barCode -__v")
      .orFail(new Error("No docs as featuredProducts"));

    let products = await query.find();
    let timeSale = products.filter((ele, index) => {
      if (ele.created_at < ele.created_end) {
        return true;
      }
    });

    const topSaleProducts = await query
      .find({ sale_price: { $gte: number } })
      .limit(6)
      .orFail(new Error("No docs as topSaleProducts"));

    timeSale.forEach((ele, index) => {
      time = ele.created_at;
    });
    let hotDeal = await query
      .find({ created_at: time })
      .limit(1) //Chưa hiển thị đc từng product theo hotDeal nên fix tạm limit
      .select("-_id -barCode -__v")
      .orFail(new Error("No docs hotDeal"));

    let listProducts = [featuredProducts, topSaleProducts, [...hotDeal]];
    cook = req.cookies.name ? req.cookies.name : null;
    if (cook) {
      findUserId = await customerModel
        .findOne({ fullName: cook })
        .select("-password -__v")
        .orFail(new appError("No docs as customerModel", 404));
    }

    return res.render("Home", {
      title,
      path,
      listProducts,
      createComma,
      numVnd,
      cook,
      findUserId,
    });

    //show postman
    // return res.status(200).json({
    //   status: "success",
    //   result: listProducts.length,
    //   data: { listProducts: listProducts },
    // });
  }
}

module.exports = new homeController();
