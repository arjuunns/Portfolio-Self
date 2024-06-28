// let darkMode = localStorage.getItem("darkMode");
// let darkModeToggle = document.querySelector("#switch");
// const navbar = document.querySelector("nav");
// const navlist = document.querySelectorAll(".nav-list a");
// console.log(navlist);
// const enableDarkMode = function () {
//   document.body.classList.add("darkmode");
//   navbar.classList.add("darkmode");
//   navlist.forEach((link) => { link.classList.add("darkmode");});
//   localStorage.setItem("darkMode", "enabled");
// };

// const disableDarkMode = function () {
//   document.body.classList.remove("darkmode");
//   navbar.classList.remove("darkmode");
//   navlist.forEach((link) => { link.classList.remove("darkmode");});
//   localStorage.setItem("darkMode", "disabled");
// };

// if (darkMode === "enabled") {
//   enableDarkMode();
// }

// darkModeToggle.addEventListener("click", (e) => {
//   darkMode = localStorage.getItem("darkMode");
//   if (darkMode !== "enabled") {
//     enableDarkMode();
//   } else {
//     disableDarkMode();
//   }
// });

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#switch");
const themeStylesheet = document.querySelector("#themeStylesheet");

const enableDarkMode = () => {
  themeStylesheet.setAttribute("href", "/Files/dark.css");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  themeStylesheet.setAttribute("href", "/Files/light.css");
  localStorage.setItem("darkMode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
} 

darkModeToggle.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
