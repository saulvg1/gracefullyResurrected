const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navBar .navBar_linksWrapper");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};
const closeNav = () => {
  const nav = document.querySelector(".navBar .navBar_linksWrapper");
  document.addEventListener("click", () => {
    nav.classList.remove("nav-active");
  });
};

const activeDropdownLink = () => {
  const navLink = document.querySelector("#navLink-dropdown");
  const dropdown = document.querySelector(".dropdown_content");

  navLink.addEventListener("click", () => {
    dropdown.classList.toggle("activeDropdown");
  });
};

navSlide();
activeDropdownLink();
