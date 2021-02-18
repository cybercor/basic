//ĐANG BỊ BUG NÊN TẠM DÙNG urlencoded THAY THẾ

// "use strict";
// const btnSignUp = document.querySelector(".sign-up-form");

// async function signUp(e) {
//   e.preventDefault();
//   const fullName = document.querySelector("input[type=text]").value;
//   const email = document.querySelector("input[type=email]").value;
//   const phone = document.querySelector("input[type=phone]").value;
//   const password = document.querySelector("input[type=password]").value;
//   const rePassword = document.querySelector("input[type=password]").value;
//   const response = await fetch("/Register", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" }, //Set dataType application
//     body: JSON.stringify({ fullName, email, phone, password, rePassword }), //send data to body
//   }).then((res) => res.json());
// }

// btnSignUp.addEventListener("submit", signUp);
