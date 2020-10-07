//DARK MODE TOGGLE
//modified from youtube tutorial by DesignCourse:https://youtu.be/ZKXv_ZHQ654



let checkbox = document.querySelector("input[name=theme");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("style", "dark");
  } else {
    localStorage.setItem("style", "light");
  }
  applyStyle();
});

function applyStyle(style = localStorage.getItem("style")) {
  if (style === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.querySelector("#darkLight").checked = true;
  } else if (style === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    document.querySelector("#darkLight").checked = false;
  }
}








