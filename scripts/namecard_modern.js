let leftbtn = document.querySelector("#textField__left__btn");
let rightbtn = document.querySelector("#textField__right__btn");
let title = document.querySelector("#container__title");
let textField = document.querySelector("#text_Field");
let popup = document.querySelector("#message__popup");
let selectbtn = document.querySelector("#select__btn");


//These are contents to be put on the namecard.
let fields = [
  ["이름", document.querySelector("#name__svg"),"위에 이름을 입력해주세요."],
  ["학번", document.querySelector("#id__svg"), "위에 학번을 입력해주세요."],
  ["깃허브 계정", document.querySelector("#github__svg"), "위에 깃허브 계정을 입력해주세요. 마지막 항목입니다."]
];

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
    textField.value = null;

    if (count != fields.length-1) {
      count++;
    }

    title.textContent = fields[count][0];
    popup.textContent = fields[count][2];
  }
});

//This is a function of the "이전" button that allows you to enter the previous contents.
leftbtn.addEventListener("click", () => {
  if(count <= 0) {
    popup.textContent = "이전 항목이 없습니다";
    return;
  }
  
  textField.value = null;
  count--;

  title.textContent = fields[count][0];
  popup.textContent = fields[count][2];
})