//const theme = require("../scripts/theme.js");

//let NamecardTheme = theme.NamecardTheme;

//console.log(NamecardTheme);

// if (NamecardTheme === "modern") {

// }

// else if (NamecardTheme === "simple") {

// }

// else {

// }

let Namebtn = document.querySelector("#nameField__btn");
Namebtn.addEventListener("click", () => {
  //delete text field
  let target = document.querySelector("#name__svg");
  let body = document.querySelector("#name__preview");
  //remove should not be done
  
  //make new element
  let Namefield = document.querySelector("#nameField");
  let Name = Namefield.value;

  target.textContent = Name;

  body.appendChild(newName);
})