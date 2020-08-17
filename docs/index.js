const burger = document.querySelector(".burger");
const nav = document.querySelector(".navBar .navBar_linksWrapper");
const navLink = document.querySelector("#navLink-dropdown");

const servicesDropdown = document.querySelector("#navLink-dropdown");
const dropdown = document.querySelector(".dropdown_content");

const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

const activeDropdownLink = () => {
  navLink.addEventListener("click", () => {
    dropdown.classList.toggle("activeDropdown");
  });
};

window.addEventListener("click", function (event) {
  if (
    event.target != nav &&
    event.target != burger &&
    event.target != nav.children &&
    event.target != servicesDropdown
  ) {
    nav.classList.remove("nav-active");
  }
});
navSlide();
activeDropdownLink();
