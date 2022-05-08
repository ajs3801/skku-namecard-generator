//const theme = require("../scripts/theme.js");

//let NamecardTheme = theme.NamecardTheme;

//console.log(NamecardTheme);

// if (NamecardTheme === "modern") {

// }

// else if (NamecardTheme === "simple") {

// }

// else {

// }

let name_js = "";
let id_js = "";
let major_js = "";
let Email_js = "";

let Namebtn = document.querySelector("#nameField__btn");
Namebtn.addEventListener("click", () => {
  //delete text field
  let target = document.querySelector("#name__svg");
  let result = document.querySelector("#result__name__svg");

  //make new element
  let Namefield = document.querySelector("#nameField");
  let Name = Namefield.value;

  name_js = Name;
  result.textContent = Name;
  target.textContent = Name;
})

let idbtn = document.querySelector("#idField__btn");
idbtn.addEventListener("click", () => {
  let target = document.querySelector("#id__svg");
  let result = document.querySelector("#result__id__svg");

  let idfield = document.querySelector("#idField");
  let id = idfield.value;
  
  id_js = id;
  result.textContent = id;
  target.textContent = id;
})

let majorbtn = document.querySelector("#majorField__btn");
majorbtn.addEventListener("click", () => {
  let target = document.querySelector("#major__svg");
  let result = document.querySelector("#result__major__svg");

  let majorfield = document.querySelector("#majorField");
  let major = majorfield.value;

  major_js = major;
  result.textContent = major;
  target.textContent = major;
})

let Emailbtn = document.querySelector("#EmailField__btn");
Emailbtn.addEventListener("click", () => {
  let target = document.querySelector("#Email__svg");
  let result = document.querySelector("#result__Email__svg");

  let Emailfield = document.querySelector("#EmailField");
  let Email = Emailfield.value;
  Email_js = Email;
  result.textContent = Email;
  target.textContent = Email;

})

let finish = document.querySelector("#finish__btn");
finish.addEventListener("click", () => {
  window.location.href = "../index/Result.html";
})