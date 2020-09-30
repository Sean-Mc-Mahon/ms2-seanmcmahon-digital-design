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

//DARK MODE TOGGLE
//modified from youtube tutorial by DesignCourse:https://youtu.be/ZKXv_ZHQ654
var checkbox = document.querySelector("input[name=theme");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

//3D MODEL ANIMATION
//inspired by youtube tutorial by Dev Ed:https://youtu.be/tsMHONmUkvI

//variables
let container;
let camera;
let renderer;
let scene;
let house;

function init() {
  container = document.querySelector(".scene");

  //create scene
  scene = new THREE.Scene();

  const fov = 70;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 500;

  //camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 15, 150);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(50, 100, 200);
  scene.add(light);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./assets/3d/scene.gltf", function (gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0];
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  // house.rotation.z += 0.0;
  house.rotation.y += 0.01;
  // house.rotation.x += 0.02;
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
