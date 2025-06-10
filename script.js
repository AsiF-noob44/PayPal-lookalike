// Navigation
const dropdownItems = document.querySelectorAll(".dropdown-hover");

dropdownItems.forEach((dropdownItem) => {
  dropdownItem.addEventListener("mouseover", () => {
    const dropdown = dropdownItem.lastElementChild;
    dropdown.classList.add("show");

    const navbarWrapper = document.querySelector(".navbar-wrapper");
    navbarWrapper.style.background =
      "linear-gradient(to right, #066399, #2f8fdf, #066399)";
    navbarWrapper.classList.add("dropdown-active");
  });

  dropdownItem.addEventListener("mouseout", () => {
    const dropdown = dropdownItem.lastElementChild;
    dropdown.classList.remove("show");

    const navbarWrapper = document.querySelector(".navbar-wrapper");
    navbarWrapper.style.background = "none";
    navbarWrapper.classList.remove("dropdown-active");
  });
});
// End of Navigation
