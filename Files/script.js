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
