// nav text animation (inspired by youtube tutorial by Dev Ed:https://youtu.be/GUEB9FogoP8)
const text = document.querySelector(".fancy");
const strText = text.textContent;
//create split array
const splitText = strText.split("");
//remove original text
text.textContent = "";

//loop through split array to add split text to individual spans
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 110);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
