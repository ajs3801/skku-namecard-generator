//const theme = require("../scripts/theme.js");

//let NamecardTheme = theme.NamecardTheme;

//console.log(NamecardTheme);

// if (NamecardTheme === "modern") {

// }

// else if (NamecardTheme === "simple") {

// }

// else {

// }

// let name_js = "";
// let id_js = "";
// let major_js = "";
// let Email_js = "";
let current = 1;

let leftbtn = document.querySelector("#textField__left__btn");
let rightbtn = document.querySelector("#textField__right__btn");

leftbtn.addEventListener("click", () => {
  if (current>1 && current<=4) {
    let title = document.querySelector("#container__title");
    let nameField = document.querySelector("#name__svg");
    let majorField = document.querySelector("#major__svg");
    let EmailField = document.querySelector("#Email__svg");
    let idField = document.querySelector("#id__svg");
    let textField = document.querySelector("#text_Field");

    if (current == 1) {
      let value = textField.value;
      nameField.textContent = value;
    }

    else if (current == 2) {
      let value = textField.value;
      idField.textContent = value;
    }

    else if (current == 3) {
      let value = textField.value;
      majorField.textContent = value;
    }

    else if (current == 4) {
      let value = textField.value;
      EmailField.textContent = value;
    }
    current = current - 1;

    if (current == 1) {
      title.textContent = "이름";
      leftbtn.textContent = "X";
      rightbtn.textContent = "다음";
    }

    else if (current == 2) {
      title.textContent = "학번";
      leftbtn.textContent = "이전";
      rightbtn.textContent = "다음";
    }

    else if (current == 3) {
      title.textContent = "학과";
      leftbtn.textContent = "이전";
      rightbtn.textContent = "다음";
    }

    else if (current == 4) {
      title.textContent = "Email";
      leftbtn.textContent = "이전";
      rightbtn.textContent = "선택";
    }
    textField.value = null;
  }
})

rightbtn.addEventListener("click", () => {
  if (current>=1 && current<=4) {
    let title = document.querySelector("#container__title");
    let nameField = document.querySelector("#name__svg");
    let majorField = document.querySelector("#major__svg");
    let EmailField = document.querySelector("#Email__svg");
    let idField = document.querySelector("#id__svg");
    let textField = document.querySelector("#text_Field");

    if (current == 1) {
      let value = textField.value;
      nameField.textContent = value;
    }

    else if (current == 2) {
      let value = textField.value;
      idField.textContent = value;
    }

    else if (current == 3) {
      let value = textField.value;
      majorField.textContent = value;
    }

    else if (current == 4) {
      let value = textField.value;
      EmailField.textContent = value;
    }

    if (current!=4) {
      current = current + 1;
    }

    if (current == 1) {
      title.textContent = "이름";
      leftbtn.textContent = "없음";
      rightbtn.textContent = "다음";
    }

    else if (current == 2) {
      title.textContent = "학번";
      leftbtn.textContent = "이전";
      rightbtn.textContent = "다음";
    }

    else if (current == 3) {
      title.textContent = "학과";
      leftbtn.textContent = "이전";
      rightbtn.textContent = "다음";
    }

    else if (current == 4) {
      title.textContent = "Email";
      leftbtn.textContent = "이전";
      rightbtn.textContent = "선택";
    }
    textField.value = null;
  }
})

// let finish = document.querySelector("#finish__btn");
// finish.addEventListener("click", () => {
//   window.location.href = "../index/Result.html";
})