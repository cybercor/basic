const fs = require("fs");
const productModel = require("../Models/productModel");
const customerModel = require("../Models/customerModel");
const appError = require("../Utils/appError");

class productController {
  constructor() {}

  async handleRenPagiSorSear(req, res, next) {
    const numVnd = ["000"];
    const number = Number.parseInt(numVnd);
    let createComma = new Intl.NumberFormat();
    let cook, findUserId;
    const title =
      "Mua Gấu Bông - Shop Gấu Bông TPHCM - Cửa Hàng Gấu Bông Cao Cấp";

    const products = await productModel
      .find()
      .select({ featured: number })
      .orFail(new appError(`Read docs productModel found`, 404));
    const listProducts = Array.isArray(products)
      ? products
      : next(new appError("Fetch Data Found", 404));

    cook = req.cookies.name ? req.cookies.name : null;
    if (cook) {
      findUserId = await customerModel
        .findOne({ fullName: cook })
        .select("fullName")
        .orFail(new appError("No docs as customerModel", 404));
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit);
    const prevPage = (page - 1) * limit;
    const nextPage = prevPage + 1;
    const pages = {};

    pages.prev = {
      page: page - 1,
      limit: 4,
    };
    pages.next = {
      page: page + 1,
      limit: 4,
    };
    let oldProduct = req.query.sort.concat(",1");
    let changeOldProduct = oldProduct.split(",");
    const finishOldProduct = parseInt(changeOldProduct[1]);

    pages.page = await productModel
      .find()
      .sort()
      .limit(limit)
      .skip(nextPage)
      // .deleteOne({ featured: finishOldProduct })
      .orFail(new appError(`Read file product found`, 404));

    // res.status(200).json({
    //   total: pages.page.length,
    //   message: "success",
    //   data: pages,
    // });
    return res.render("Products", {
      title,
      listProducts,
      createComma,
      numVnd,
      cook,
      findUserId,
      pages,
      prevPage,
      nextPage,
      page,
    });
  }

  // sortProduct(req,res,next){

  // }
}

module.exports = new productController();
