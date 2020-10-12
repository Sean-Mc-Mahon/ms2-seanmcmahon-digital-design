//Code modified from slack call in #interactive-front-end channel led by Eamon_lead on 23-09-20
//Grab radio Buttons
function getUserStyleSetting() {
  myRadioSett = document.querySelectorAll('input[name="set-style"]');

  let i,
    max = myRadioSett.length;

  for (i = 0; i < max; i++) {
    myRadioSett[i].onclick = function () {
      let style = this.value[0].toUpperCase() + this.value.slice(1);
      localStorage.setItem("chosenStyle", style);
      applyStyle();
    };
  }
}
function applyStyle(style = localStorage.getItem("chosenStyle")) {
  if (style === "Blue") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove("normal");
      target[i].classList.remove("pink");
      target[i].classList.add("blue");
      target[i].classList.remove("yellow");
      target[i].classList.remove("green");
      target[i].classList.remove("brown");
      document.querySelector("#styleChoice1").checked = false;
      document.querySelector("#styleChoice2").checked = false;
      document.querySelector("#styleChoice3").checked = true;
      document.querySelector("#styleChoice4").checked = false;
      document.querySelector("#styleChoice5").checked = false;
      document.querySelector("#styleChoice6").checked = false;
    }
  } else if (style === "Pink") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove("normal");
      target[i].classList.remove("blue");
      target[i].classList.add("pink");
      target[i].classList.remove("yellow");
      target[i].classList.remove("green");
      target[i].classList.remove("brown");
      document.querySelector("#styleChoice1").checked = false;
      document.querySelector("#styleChoice2").checked = false;
      document.querySelector("#styleChoice3").checked = false;
      document.querySelector("#styleChoice4").checked = false;
      document.querySelector("#styleChoice5").checked = true;
      document.querySelector("#styleChoice6").checked = false;
    }
  } else if (style === "Normal") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove("blue");
      target[i].classList.remove("pink");
      target[i].classList.add("normal");
      target[i].classList.remove("yellow");
      target[i].classList.remove("green");
      target[i].classList.remove("brown");
      document.querySelector("#styleChoice1").checked = true;
      document.querySelector("#styleChoice2").checked = false;
      document.querySelector("#styleChoice3").checked = false;
      document.querySelector("#styleChoice4").checked = false;
      document.querySelector("#styleChoice5").checked = false;
      document.querySelector("#styleChoice6").checked = false;
    }
  } else if (style === "Yellow") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove("blue");
      target[i].classList.remove("pink");
      target[i].classList.remove("normal");
      target[i].classList.add("yellow");
      target[i].classList.remove("green");
      target[i].classList.remove("brown");
      document.querySelector("#styleChoice1").checked = false;
      document.querySelector("#styleChoice1").checked = true;
      document.querySelector("#styleChoice3").checked = false;
      document.querySelector("#styleChoice4").checked = false;
      document.querySelector("#styleChoice5").checked = false;
      document.querySelector("#styleChoice6").checked = false;
    }
  } else if (style === "Green") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove("blue");
      target[i].classList.remove("pink");
      target[i].classList.remove("normal");
      target[i].classList.remove("yellow");
      target[i].classList.add("green");
      target[i].classList.remove("brown");
      document.querySelector("#styleChoice1").checked = false;
      document.querySelector("#styleChoice1").checked = false;
      document.querySelector("#styleChoice3").checked = false;
      document.querySelector("#styleChoice4").checked = true;
      document.querySelector("#styleChoice5").checked = false;
      document.querySelector("#styleChoice6").checked = false;
    }
  } else if (style === "Brown") {
    let target = document.querySelectorAll(".color");
    for (let i = 0; i < target.length; i++) {
      target[i].classList.remove("blue");
      target[i].classList.remove("pink");
      target[i].classList.remove("normal");
      target[i].classList.remove("yellow");
      target[i].classList.remove("green");
      target[i].classList.add("brown");
      document.querySelector("#styleChoice1").checked = false;
      document.querySelector("#styleChoice1").checked = false;
      document.querySelector("#styleChoice3").checked = false;
      document.querySelector("#styleChoice4").checked = false;
      document.querySelector("#styleChoice5").checked = false;
      document.querySelector("#styleChoice6").checked = true;
    }
  }
}

window.onload = function () {
  applyStyle();
  getUserStyleSetting();
};
