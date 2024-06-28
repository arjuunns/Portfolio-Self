let lol = document.getElementById("menu");
let submenu = document.getElementById("submenu");
let cross = document.getElementById("reverse");
let miniLinks = document.querySelectorAll(".mini-link");
let tl = gsap.timeline({ paused: true, reversed: true });

tl.to("#submenu", {
  opacity: 1,
  duration: 0.1,
  y: 0,
  onStart: () => {
    submenu.style.visibility = "visible";
    document.body.classList.add("no-scroll");
  },
}).from("#mini-ul a", {
  y: 200,
  duration: 0.1,
  stagger: 0.1,
  opacity: 0,
});

lol.addEventListener("click", () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.restart();
  }
});

cross.addEventListener("click", () => {
  tl.reverse().then(() => {
    submenu.style.visibility = "hidden";
    document.body.classList.remove("no-scroll");
  });
});

miniLinks.forEach((link) => {
  link.addEventListener("click", () => {
    tl.reverse().then(() => {
      submenu.style.visibility = "hidden";
      document.body.classList.remove("no-scroll");
    });
  });
});

// cursor

const crsr = document.querySelector(".cursor");
let timeout;

function mouseStopped() {
  crsr.style.opacity = 0;
}

document.addEventListener("mousemove", (e) => {
  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;
  crsr.style.left = e.clientX + scrollX + "px";
  crsr.style.top = e.clientY + scrollY + "px";
  crsr.style.opacity = 1;
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

// Select all links with hashes
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  // Smooth scroll on click
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// typing effect =>

var typed = new Typed("#auto-type", {
  strings: [
    "Junior FrontEnd Developer.",
    "Backend Enthusiast.",
    "Competitive Programmer.",
    "CapyBara Fan.",
  ],

  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  backDelay: 1000,
});

// DARK MODE =>

// const toggleMode = document.querySelector("#switch");
// const body = document.querySelector("body");
// const nav = document.querySelector("nav");
// const darkScheme = "black";
// const lightScheme = "white";
// const navLinks = document.querySelectorAll(".nav-list a");
// const footerLinks = document.querySelectorAll(".credit-ul a");
// const socialLinks = document.querySelectorAll("i");
// const rightBox = document.querySelector(".box-right");

// const darkmode = function () {
//   body.style.backgroundColor = "black";
//   body.style.color = "white";
//   nav.style.backgroundColor = "rgba(16, 15, 15,1)";
//   crsr.style.borderColor = "red";
//   rightBox.style.backgroundColor = "black";
//   body.style.transition = "all 500ms"
//   navLinks.forEach(link => {
//     link.style.color = "white";
//   });
//   footerLinks.forEach(link => {
//     link.style.color = "white";
//   });
//   socialLinks.forEach(link => {
//     link.style.color = "white";
//     // link.style.backgroundColor = "red"
//     link.style.boxShadow = "0px -4x 5px 0px inset grey";
//   });
// };

// const lightmode = function () {
//   body.style.backgroundColor = "white";
//   body.style.color = "black";
//   nav.style.backgroundColor = "white";
//   crsr.style.borderColor = "hsla(0, 0%, 0%, 40%)";
//   rightBox.style.backgroundColor = "white";
//   navLinks.forEach(link => {
//     link.style.color = "black";
//   });
//   footerLinks.forEach(link => {
//     link.style.color = "black";
//   });
//   socialLinks.forEach(link => {
//     link.style.color = "black";
//     // link.style.backgroundColor = "red";
//     link.style.boxShadow = "0px 2px 5px 0px  inset rgba(0, 0, 0, 0.25)";
//   });
// };

// let isDarkMode = true;
// toggleMode.addEventListener("toggle", (e) => {
  // if (isDarkMode) {
    // darkmode();
    // body.toggle("dark-mode")
  // } else {
  //   // lightmode();
  //   body.remove(".dark-mode");
  // }
  // isDarkMode = !isDarkMode;
// });
