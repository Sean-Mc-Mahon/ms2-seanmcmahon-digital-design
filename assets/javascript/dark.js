//DARK MODE TOGGLE
//modified from youtube tutorial by DesignCourse:https://youtu.be/ZKXv_ZHQ654


//$('html').attr("data-theme",'localStorage.toggled');
// let checkbox = document.querySelector("input[name=theme");

// function darkLight() {
//   if (localStorage.toggled != 'dark') {
//   document.documentElement.setAttribute("data-theme", "dark");
//   localStorage.toggled = "dark";
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//      localStorage.toggled = "dark";
//   }
// });

$('body').toggleClass(localStorage.toggled);

function darkLight() {
  /*DARK CLASS*/
  if (localStorage.toggled != 'dark') {
    $('body, p, .nav-link, #logo-text, .fade').toggleClass('dark', true);
    $('.line1, .line2, .line3').toggleClass('light', true);
    // $('.normal').css('color', '#fff');
    localStorage.toggled = "dark";

  } else {
    $('body, p, .nav-link, #logo-text, .fade').toggleClass('dark', false);
    $('.line1, .line2, .line3').toggleClass('light', false);
    // $('.normal').css('color', '#000');
    localStorage.toggled = "";
  }
}

/*Add 'checked' property to input if background == dark*/
if ($('body').hasClass('dark')) {
  $('#checkBox').prop("checked", true)
} else {
  $('#checkBox').prop("checked", false)
}









