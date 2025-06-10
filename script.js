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

const observerOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px",
};

const section3Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const section3Heading = entry.target.querySelector(".section-3-heading");
      const features = entry.target.querySelectorAll(".feature");

      setTimeout(() => {
        section3Heading.classList.add("animate");
      }, 200);

      setTimeout(() => {
        features.forEach((feature, index) => {
          feature.classList.add("animate");

          setTimeout(() => {
            feature.style.transition = "all 0.15s ease-out";
          }, 600 + index * 200 + 100);
        });
      }, 600);

      section3Observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const section4Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const section4Heading = entry.target.querySelector(".section-4-heading");
      const section4ImgWrapper = entry.target.querySelector(
        ".section-4-img-wrapper"
      );
      const section4List = entry.target.querySelector(".section-4-list");

      setTimeout(() => {
        section4Heading.classList.add("animate");
      }, 200);

      setTimeout(() => {
        section4ImgWrapper.classList.add("animate");
      }, 500);

      setTimeout(() => {
        section4List.classList.add("animate");
      }, 700);

      section4Observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const section3 = document.querySelector(".section-3");
const section4 = document.querySelector(".section-4");

if (section3) {
  section3Observer.observe(section3);
}

if (section4) {
  section4Observer.observe(section4);
}
