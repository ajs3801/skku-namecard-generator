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
// let current = 1;

//These are functions of the button used to make simple namecard.
//You can modify this js code to make a new theme of the namecard.

let leftbtn = document.querySelector("#textField__left__btn");
let rightbtn = document.querySelector("#textField__right__btn");
let title = document.querySelector("#container__title");
let textField = document.querySelector("#text_Field");
let popup = document.querySelector("#message__popup");
let selectbtn = document.querySelector("#select__btn");

//These are contents to be put on the namecard.
//You can choose what kind of content you want to put in.

let fields = [
  ["이름", document.querySelector("#name__svg"),"위에 이름을 입력해주세요"],
  ["학번", document.querySelector("#id__svg"),"위에 학번을 입력해주세요"],
  ["이메일", document.querySelector("#email__svg"),"위에 Email을 입력해주세요"],
  ["학과", document.querySelector("#major__svg"),"위에 학과를 입력해주세요"],
  ["깃허브 계정", document.querySelector("#github__svg"),"위에 깃허브 계정을 입력해주세요"],
  ["전화번호", document.querySelector("#ph__svg"),"위에 전화번호를 입력해주세요"]
];
//   name: ["이름", document.querySelector("#name__svg")],
//   id: ["학번", document.querySelector("#id__svg")],
//   email: ["이메일", document.querySelector("#email__svg")],
//   major: ["학과", document.querySelector("#major__svg")],
//   github_acc: ["깃허브 계정", document.querySelector("#github__svg")],
//   phone_number: ["전화번호", document.querySelector("#ph__svg")],
// }

let count = 0;

//This is a fuction of select button to enter the contents in the namecard.
selectbtn.addEventListener("click", () => {
  let value = textField.value;

  if (value === "") {
      popup.textContent = "정보를 입력하고 다음 및 이전을 눌러주세요";
      return;
  }
  
  fields[count][1].textContent = value;
  textField.value = null;

  popup.textContent = "select를 누르셨으면, 다음 혹은 이전을 눌러주세요."
});

//This is a function of the "다음" button that allows you to enter the followng contents.
rightbtn.addEventListener("click", () => {

  if(count >= fields.length - 1) {
    popup.textContent = "현재 화면이 마지막 항목입니다";
    return;
  }

  else {
    // let value = textField.value;
    // fields[count][1].textContent = value;

    textField.value = null;

    if (count != fields.length-1) {
      count++;
    }

    title.textContent = fields[count][0];
    popup.textContent = fields[count][2];
  }
  // if(count == length(fields)) {
  //   // TODO: 마지막에만 다운로드 버튼 뜨게  
  // }
});

// let nameField = document.querySelector("#name__svg");
// let majorField = document.querySelector("#major__svg");
// let EmailField = document.querySelector("#Email__svg");
// let idField = document.querySelector("#id__svg");

//This is a function of the "이전" button that allows you to enter the previous contents.
leftbtn.addEventListener("click", () => {
  //console.log(count);
  if(count <= 0) {
    popup.textContent = "이전 항목이 없습니다";
    return;
  }
  
  // title.textContent = fields[count][0];
  // let value = textField.value;
  // fields[count][1].textContent = value;

  textField.value = null;
  count--;

  title.textContent = fields[count][0];
  popup.textContent = fields[count][2];
  // if(count == length(fields)) {
  //   // TODO: 마지막에만 다운로드 버튼 뜨게  
  // }
})

// rightbtn.addEventListener("click", () => {
//   if (current>=1 && current<=4) {
//     let title = document.querySelector("#container__title");
//     let nameField = document.querySelector("#name__svg");
//     let majorField = document.querySelector("#major__svg");
//     let EmailField = document.querySelector("#Email__svg");
//     let idField = document.querySelector("#id__svg");
//     let textField = document.querySelector("#text_Field");

//     if (current == 1) {
//       let value = textField.value;
//       nameField.textContent = value;
//     }

//     else if (current == 2) {
//       let value = textField.value;
//       idField.textContent = value;
//     }

//     else if (current == 3) {
//       let value = textField.value;
//       majorField.textContent = value;
//     }

//     else if (current == 4) {
//       let value = textField.value;
//       EmailField.textContent = value;
//     }

//     if (current!=4) {
//       current = current + 1;
//     }

//     if (current == 1) {
//       title.textContent = "이름";
//       leftbtn.textContent = "없음";
//       rightbtn.textContent = "다음";
//     }

//     else if (current == 2) {
//       title.textContent = "학번";
//       leftbtn.textContent = "이전";
//       rightbtn.textContent = "다음";
//     }

//     else if (current == 3) {
//       title.textContent = "학과";
//       leftbtn.textContent = "이전";
//       rightbtn.textContent = "다음";
//     }

//     else if (current == 4) {
//       title.textContent = "Email";
//       leftbtn.textContent = "이전";
//       rightbtn.textContent = "선택";
//     }
//     textField.value = null;
//   }
// })
// // let finish = document.querySelector("#finish__btn");
// // finish.addEventListener("click", () => {
// //   window.location.href = "../index/Result.html";
// //})