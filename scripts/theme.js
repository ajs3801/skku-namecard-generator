let NamecardType = "";
// module.exports.NamecardType = NamecardType;

let ModernButton = document.querySelector("#modern__select");
ModernButton.addEventListener("click", () => {
  NamecardType = "modern";
  console.log(NamecardType);
  window.location.href = "../page/Namecard_modern.html";
})

let SimpleButton = document.querySelector("#simple__select");
SimpleButton.addEventListener("click", () => {
  NamecardType = "simple";
  console.log(NamecardType);
  window.location.href = "../page/Namecard_simple.html";
})

let ColorButton = document.querySelector("#color__select");
ColorButton.addEventListener("click", () => {
  NamecardType = "colorful";
  console.log(NamecardType);
  window.location.href = "../page/Namecard_colorful.html";
})

