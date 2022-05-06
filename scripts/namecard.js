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
  body.removeChild(target);

  //make new element
  let Namefield = document.querySelector("#nameField");
  let Name = Namefield.value;

  let newName = document.createElement("text");
  newName.setAttributeNS(null,"x","40");
  newName.setAttributeNS(null,"y","155");
  newName.setAttributeNS(null,"font-size","10");
  newName.setAttributeNS(null,"fill","#2F2F2F");
  newName.setAttributeNS(null,"visibility","visible");
  newName.id="name__svg";
  newName.textContent = Name;

  body.appendChild(newName);
})