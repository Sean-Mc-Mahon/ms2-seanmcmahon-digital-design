//Code modified from slack call in #interactive-front-end channel led by Eamon_lead on 23-09-20
function applyStyle(style) {
  if (style === "Blue") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove('normal');
      target[i].classList.remove('orange');
      target[i].classList.add('blue');
      console.log('blue');
    }
  } else if (style === "Orange") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove('normal');
      target[i].classList.remove('blue');
      target[i].classList.add('orange');
      console.log('orange');
    }
  } else if (style === "Normal") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove('blue');
      target[i].classList.remove('orange');
      target[i].classList.add('normal');
      console.log('normal');
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
      console.log(style);
      applyStyle(style);
    }
  }
}

getUserStyleSetting();