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

// Navigation Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  const logos = document.querySelectorAll(
    ".navbar-logo, .signup-page-logo, .login-page-logo, .logo"
  );
  logos.forEach((logo) => {
    logo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  });

  // Index page navigation
  const loginBtns = document.querySelectorAll(
    ".navbar-btn.login-btn, .form-login-btn, .login-btn"
  );
  loginBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  });

  const signupBtns = document.querySelectorAll(
    ".navbar-btn.signup-btn, .form-signup-btn, .signup-btn"
  );
  signupBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "signup.html";
    });
  });

  // Home buttons
  const homeBtns = document.querySelectorAll(".home-btn");
  homeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  });

  // Service buttons - Learn More
  const serviceBtns = document.querySelectorAll(".service-btn");
  serviceBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const pages = ["individuals.html", "businesses.html", "partners.html"];
      window.location.href = pages[index];
    });
  });
  // Learn More button (banner)
  const learnMoreBtns = document.querySelectorAll(".banner .blue-btn");
  learnMoreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "about.html";
    });
  });

  // Get Started buttons
  const getStartedBtns = document.querySelectorAll(
    ".section-5-top .blue-btn, .cta-btn"
  );
  getStartedBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "signup.html";
    });
  });

  // Business account links
  const businessLinks = document.querySelectorAll('a[href="signup.html"]');
  businessLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "signup.html";
    });
  });

  // Signup page - Login button
  const signupLoginBtn = document.querySelector(".signup-page-top button");
  if (signupLoginBtn) {
    signupLoginBtn.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }

  // Login page - Sign up button
  const loginSignupBtn = document.querySelector(".form-signup-btn");
  if (loginSignupBtn) {
    loginSignupBtn.addEventListener("click", () => {
      window.location.href = "signup.html";
    });
  }
});
// End of Navigation

// Counter Animation
function animateCounter(element) {
  const target = parseInt(element.getAttribute("data-target"));
  const increment = target / 200;
  let count = 0;

  const updateCounter = () => {
    if (count < target) {
      count += increment;
      if (count > target) count = target;

      let displayValue = Math.floor(count);
      if (displayValue >= 1000000) {
        displayValue = (displayValue / 1000000).toFixed(1) + "M";
      } else if (displayValue >= 1000) {
        displayValue = (displayValue / 1000).toFixed(0) + "K";
      }

      element.textContent = displayValue;
      requestAnimationFrame(updateCounter);
    } else {
      let finalValue = target;
      if (finalValue >= 1000000) {
        finalValue = (finalValue / 1000000).toFixed(0) + "M+";
      } else if (finalValue >= 1000) {
        finalValue = (finalValue / 1000).toFixed(0) + "K+";
      } else {
        finalValue = finalValue + "+";
      }
      element.textContent = finalValue;
    }
  };

  updateCounter();
}

// Intersection Observer for animations
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

// Counter Section Observer
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counterHeading = entry.target.querySelector(".counter-heading");
      const counterItems = entry.target.querySelectorAll(".counter-item");
      const counterNumbers = entry.target.querySelectorAll(".counter-number");

      setTimeout(() => {
        counterHeading.classList.add("animate");
      }, 200);
      setTimeout(() => {
        counterItems.forEach((item, index) => {
          item.classList.add("animate");
        });

        setTimeout(() => {
          counterNumbers.forEach((counter) => {
            animateCounter(counter);
          });
        }, 800);

        setTimeout(() => {
          counterItems.forEach((item) => {
            item.style.transition =
              "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease";
          });
        }, 1500);
      }, 500);

      counterObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const section3 = document.querySelector(".section-3");
const section4 = document.querySelector(".section-4");
const counterSection = document.querySelector(".user-counter-section");

if (section3) {
  section3Observer.observe(section3);
}

if (section4) {
  section4Observer.observe(section4);
}

if (counterSection) {
  counterObserver.observe(counterSection);
}
