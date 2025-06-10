// Navigation
const dropdownItems = document.querySelectorAll(".dropdown-hover");

dropdownItems.forEach((dropdownItem) => {
  let timeoutId;
  dropdownItem.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);

    document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("show");
    });

    const dropdown = dropdownItem.lastElementChild;
    dropdown.classList.add("show");

    const navbarWrapper = document.querySelector(".navbar-wrapper");
    navbarWrapper.style.background =
      "linear-gradient(to right, #066399, #2f8fdf, #066399)";
    navbarWrapper.classList.add("dropdown-active");
  });

  dropdownItem.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      const anyDropdownActive = document.querySelector(".dropdown-hover:hover");
      if (!anyDropdownActive) {
        document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
          dropdown.classList.remove("show");
        });

        const navbarWrapper = document.querySelector(".navbar-wrapper");
        navbarWrapper.style.background = "none";
        navbarWrapper.classList.remove("dropdown-active");
      }
    }, 100);
  });
});
// End of Navigation
