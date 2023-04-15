"use strict";
const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const header = document.querySelector(".header");
mobileNavBtn.addEventListener("click", function () {
  header.classList.toggle("nav-mobie");
});
// Implement the smooth scrolling ||||||||||||||||||||||||||||||
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // prevent defaul scrolling
    const href = link.getAttribute("href");
    // scrolling to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scrolling to specific section
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
    // remove the nav in mobile
    header.classList.remove("nav-mobie");
  });
});

// Implement the sticky navigation |||||||||||||||||||||||||||||
const heroSection = document.querySelector(".section-hero");
const callback = function (entries) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    document.body.classList.remove("sticky");
  } else {
    document.body.classList.add("sticky");
  }
};
const obs = new IntersectionObserver(callback, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});
obs.observe(heroSection);
