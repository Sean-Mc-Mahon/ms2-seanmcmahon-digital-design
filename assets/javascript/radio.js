//Code modified from slack call in #interactive-front-end channel led by Eamon_lead on 23-09-20
function applyStyle(style = sessionStorage.getItem("chosenStyle")) {

  if (style === "Blue") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove('normal');
      target[i].classList.remove('orange');
      target[i].classList.add('blue');
      document.querySelector("#styleChoice1").checked = false;
      document.querySelector("#styleChoice2").checked = true;
      document.querySelector('#styleChoice3').checked = false;
    }
  } else if (style === "Orange") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove('normal');
      target[i].classList.remove('blue');
      target[i].classList.add('orange');
      document.querySelector("#styleChoice1").checked = false;
      document.querySelector("#styleChoice2").checked = false;
      document.querySelector('#styleChoice3').checked = true;
    }
  } else if (style === "Normal") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove('blue');
      target[i].classList.remove('orange');
      target[i].classList.add('normal');
      document.querySelector("#styleChoice1").checked = true;
      document.querySelector("#styleChoice2").checked = false;
      document.querySelector('#styleChoice3').checked = false;
    }
  }
}

//Grab radio Buttons
function getUserStyleSetting() {
  myRadioSett = document.querySelectorAll('input[name="set-style"]');

  let i, max = myRadioSett.length;

  for (i = 0; i < max; i++) {
    myRadioSett[i].onclick = function () {
      let style = this.value[0].toUpperCase() + this.value.slice(1);
      sessionStorage.setItem("chosenStyle", style)
      applyStyle();
    }
  }
}
window.onload = function () {
  applyStyle();
  getUserStyleSetting();
}
