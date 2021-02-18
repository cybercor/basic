import { ADD_CART } from "../Action/ActionType";

var initialState = [
  {
    id: 1,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png",
    name: "Iphone",
    status: "Đây là sản phẩm do Apple tạo ra",
    price: 100,
    invetory: 10
  },
  {
    id: 2,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-black-400x460.png",
    name: "Samsung",
    status: "Đây là sản phẩm do Samsung tạo ra",
    price: 200,
    invetory: 12
  },
  {
    id: 3,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-400x460.png",
    name: "Nokia",
    status: "Đây là sản phẩm do Nokia tạo ra",
    price: 220,
    invetory: 7
  }
];
const reducer = (state = initialState, action) => {
  return state
};
export default reducer;
