// NAV TEXT DROP ANIMATION (inspired by youtube tutorial by Dev Ed:https://youtu.be/GUEB9FogoP8)
const text1 = document.querySelector(".drop1");
const strText1 = text1.textContent;
//create split array
const splitText1 = strText1.split("");
//remove original text
text1.textContent = "";

//loop through split array to add split text to individual spans
for (let i = 0; i < splitText1.length; i++) {
  text1.innerHTML += "<span>" + splitText1[i] + "</span>";
}

let char1 = 0;
let timer1 = setInterval(onTick1, 100);

//add class of fade to all characters at an interval
function onTick1() {
  const span1 = text1.querySelectorAll("span")[char1];
  span1.classList.add("fade");
  char1++;
  if (char1 === splitText1.length) {
    complete1();
    return;
  }
}

//clear timer at end of function
function complete1() {
  clearInterval(timer1);
  timer1 = null;
}

//SECOND DROP
const text2 = document.querySelector(".drop2");
const strText2 = text2.textContent;
//create split array
const splitText2 = strText2.split("");
//remove original text
text2.textContent = "";

//loop through split array to add split text to individual spans
for (let i = 0; i < splitText2.length; i++) {
  text2.innerHTML += "<span>" + splitText2[i] + "</span>";
}

let char2 = 0;
let timer2 = setInterval(onTick2, 110);

function onTick2() {
  const span2 = text2.querySelectorAll("span")[char2];
  span2.classList.add("fade");
  char2++;
  if (char2 === splitText2.length) {
    complete2();
    return;
  }
}

function complete2() {
  clearInterval(timer2);
  timer2 = null;
}

//BURGER ANIMATION
const burger = document.querySelector(".burger");

//functions
function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 9.5, background: "var(--bg1)" });
    gsap.to(".line2", 0.5, { autoAlpha: 0 });
    gsap.to(".line3", 0.5, {
      rotate: "-45",
      y: -9.5,
      background: "var(--bg1)",
    });
    gsap.to(".drop1, .drop2", 1, { color: "var(--bg1)" });
    gsap.to(".toggle-nav", 1, { clipPath: "circle(2500px at 100% -10%" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "var(--text1)" });
    gsap.to(".line2", 0.5, { autoAlpha: 1 });
    gsap.to(".line3", 0.5, { rotate: "0", y: 0, background: "var(--text1)" });
    gsap.to(".toggle-nav", 1, { clipPath: "circle(50px at 100% -20%" });
    gsap.to(".drop1, .drop2", 1, { color: "var(--text1)" });
    document.body.classList.remove("hide");
  }
}

//event listeners
burger.addEventListener("click", navToggle);

//text animation
const heading = document.querySelectorAll(".gallery-heading path");

for (let i = 0; i < heading.length; i++) {
  console.log(`Letter ${i} is ${heading[i].getTotalLength()}`);
}



//GOOGLE MAPS

// Initialize and add the map
function initMap() {
  // My location
  var homePin = { lat: 53.338706, lng: -6.279315 };
  // The map, centered at home
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 10, center: homePin, styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#242f3e" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ]
  });

  //info window code taken from google documentation:https://developers.google.com/maps/documentation/javascript/infowindows
  const address = '<h6>Sean Mc-Digital Designs <br> St. Lukes Ave. D8, Ireland</h6>';
  const infoWindow = new google.maps.InfoWindow({
    content: address,
  });
  //zoom reset code and marker animation taken from google documentation:https://developers.google.com/maps/documentation/javascript/events#MarkerEvents
  map.addListener("center_changed", () => {
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 2000);
  });
  var marker = new google.maps.Marker({ position: homePin, map: map, animation: google.maps.Animation.DROP, icon: "./assets/icons/map-cog.png" });
  marker.addListener("click", () => {
    map.setZoom(16);
    map.setCenter(marker.getPosition());
    infoWindow.open(map, marker);
  });
}

//hOME IMAGE GALLERY
$("svg#svg-render").hover(function () {
  $("svg#svg-render").addClass('active-svg');
  $("img.img-render").addClass('active-img-link');
  $("svg#svg-model").removeClass('active-svg');
  $("img.img-model").removeClass('active-img-link');
  $("svg#svg-furniture").removeClass('active-svg');
  $("img.img-furniture").removeClass('active-img-link');
  $("svg#svg-portrait").removeClass('active-svg');
  $("img.img-portrait").removeClass('active-img-link');
  console.log('ducky');
})

$("svg#svg-model").hover(function () {
  $("svg#svg-model").addClass('active-svg');
  $("img.img-model").addClass('active-img-link');
  $("svg#svg-render").removeClass('active-svg');
  $("img.img-render").removeClass('active-img-link');
  $("svg#svg-furniture").removeClass('active-svg');
  $("img.img-furniture").removeClass('active-img-link');
  $("svg#svg-portrait").removeClass('active-svg');
  $("img.img-portrait").removeClass('active-img-link');
  console.log('ducky')
}
)


$("svg#svg-furniture").hover(function () {
  $("svg#svg-furniture").addClass('active-svg');
  $("img.img-furniture").addClass('active-img-link');
  $("svg#svg-render").removeClass('active-svg');
  $("img.img-render").removeClass('active-img-link');
  $("svg#svg-model").removeClass('active-svg');
  $("img.img-model").removeClass('active-img-link');
  $("svg#svg-portrait").removeClass('active-svg');
  $("img.img-portrait").removeClass('active-img-link');
  console.log('ducky')
}
)

$("svg#svg-portrait").hover(function () {
  $("svg#svg-portrait").addClass('active-svg');
  $("img.img-portrait").addClass('active-img-link');
  $("svg#svg-render").removeClass('active-svg');
  $("img.img-render").removeClass('active-img-link');
  $("svg#svg-model").removeClass('active-svg');
  $("img.img-model").removeClass('active-img-link');
  $("svg#svg-furniture").removeClass('active-svg');
  $("img.img-furniture").removeClass('active-img-link');
  console.log('ducky')
}
)