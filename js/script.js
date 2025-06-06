// Code from W3Schools

// For hamburger menu

// create a variable that points to a tag with a class named nav-button on our HTML
const hamburger = document.querySelector("#nav-button");

const navMenu = document.querySelector(".nav-menu");

// This will look for an instance where our hamburger button is clicked

// This will look for an instance where our button is clicked

hamburger.addEventListener("click", () => {
  const isOpened = hamburger.getAttribute("aria-expanded");

  const visibility = navMenu.getAttribute("data-visible");

  // for our navigation button that makes it goes from open to closed

  if (isOpened === "false") {
    hamburger.setAttribute("aria-expanded", "true");
  } else if (isOpened === "true") {
    hamburger.setAttribute("aria-expanded", "false");
  }

  // for our navigation menu

  if (visibility === "false") {
    navMenu.setAttribute("data-visible", "true");
  } else if (visibility === "true") {
    navMenu.setAttribute("data-visible", "false");
  }
});

// To close nav menu when clicking on one of the links
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.setAttribute("aria-expanded", "false");
    navMenu.setAttribute("data-visible", "false");
  })
);
