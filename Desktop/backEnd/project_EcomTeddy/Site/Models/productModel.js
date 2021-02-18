const { mongoose, Schema } = require("../includeFile");

//return date
const setDateEnd = function (val) {
  if (val) {
    val = this.created_at;
    const featureDate = 5;
    let currentMonth = val.getMonth() + 1;
    let calMonth = ((currentMonth * 3) % 3) + featureDate;
    val.setMonth(calMonth);
    if (val === this.created_at) {
      this.created_at = Date.now();
    }
    return val;
  }
  return new Error(`Create ${val} failed`);
};

//Shema có getter and setter
const productSchema = new Schema(
  {
    barCode: Number,
    name: {
      type: String,
      min: [3, "Name less to 3 character"],
      lowercase: true,
      // required: [true, "Product must have a name"],
    },
    image: {
      type: String,
      // required: [true, "Product must have a image"],
    },
    price: {
      type: Number,
      min: [3, "Price less from 3 number"],
      default: 1, //Khi sử dụng default chú ý nó chỉ lưu value đầu tiên,các value về sau ko thể override
    },
    sale_price: {
      type: Number,
    },
    created_at: {
      type: Date,
      // required: [true, "Product must have a created_at"],
    },
    created_end: {
      type: Date,
      set: setDateEnd,
    },
    featured: {
      type: Number,
      default: 0,
    },
  }
  // {
  //   toJSON: { virtuals: true },
  //   toObject: { virtuals: true },
  // }
);

//random barCode
productSchema.pre("save", function (next) {
  this.barCode = Math.random();
  if (!Number(this.barCode)) {
    throw new Error(`Create ${this.barCode} failed`);
  }
  next();
});

productSchema.pre("save", function (next) {
  this.created_end = this.created_at;
  next();
});

//Properties ảo có thể getter and setter
//virtual có hiện tượng xảy ra async
// let productEndDate = productSchema.virtual("created_at.dateSale");

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
