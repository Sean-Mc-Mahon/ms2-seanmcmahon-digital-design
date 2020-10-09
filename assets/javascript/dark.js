//DARK MODE TOGGLE
//


//ORIGINAL modified from youtube tutorial by DesignCourse:https://youtu.be/ZKXv_ZHQ654
// let checkbox = document.querySelector("input[name=theme");

// checkbox.addEventListener("change", function () {
//   if (this.checked) {
//     document.documentElement.setAttribute("data-theme", "dark");
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//   }
// });


//NEW modified from odepen by miranda @ https://codepen.io/mirandalwashburn/pen/wZmZLz

// $('html').attr("data-theme", 'switcher');


// function darkLight() {
//   if (localStorage.switcher != 'dark') {
//     document.documentElement.setAttribute("data-theme", "dark");
//     $('#checkBox').prop("checked", false)
//     localStorage.switcher = "dark";
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//     $('#checkBox').prop("checked", true)
//     localStorage.switcher = "light";
//   }
// };


//code taken from Stack Overflow:https://stackoverflow.com/questions/56871118/change-theme-and-store-it-in-local-storage/56871343#56871343?newreg=df14292f4c21452fb9111541505d1cd2

var checkBox = document.getElementById('switch');

var theme = window.localStorage.getItem('data-theme');
if (theme) document.documentElement.setAttribute('data-theme', theme);
checkBox.checked = theme == 'dark' ? true : false;

checkBox.addEventListener('change', function () {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('data-theme', 'light');
  }
});




