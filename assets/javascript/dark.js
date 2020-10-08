//DARK MODE TOGGLE
//modified from youtube tutorial by DesignCourse:https://youtu.be/ZKXv_ZHQ654



let checkbox = document.querySelector("input[name=theme");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});










