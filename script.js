"use strict";

const homePage = document.querySelector("#main-page");
const aboutMePage = document.querySelector("#about-me-page");
const skillsPage = document.querySelector("#skills-page");

const homeButton = document.querySelector(".home-btn");
const aboutMeButton = document.querySelector(".about-me-btn");
const skillsButton = document.querySelector(".skills-btn");

homeButton.addEventListener("click", () => {
  homePage.classList.add("show");
  homePage.classList.remove("hidden");
  if (!aboutMePage.classList.contains("hidden")) {
    aboutMePage.classList.add("hidden");
    aboutMePage.classList.remove("show");
  }
  if (!skillsPage.classList.contains("hidden")) {
    skillsPage.classList.add("hidden");
    skillsPage.classList.remove("show");
  }
});

aboutMeButton.addEventListener("click", () => {
  aboutMePage.classList.add("show");
  aboutMePage.classList.remove("hidden");
  if (!homePage.classList.contains("hidden")) {
    homePage.classList.add("hidden");
    homePage.classList.remove("show");
  }
  if (!skillsPage.classList.contains("hidden")) {
    skillsPage.classList.add("hidden");
    skillsPage.classList.remove("show");
  }
});

skillsButton.addEventListener("click", () => {
  skillsPage.classList.add("show");
  skillsPage.classList.remove("hidden");

  if (!homePage.classList.contains("hidden")) {
    homePage.classList.add("hidden");
    homePage.classList.remove("show");
  }
  if (!aboutMePage.classList.contains("hidden")) {
    aboutMePage.classList.add("hidden");
    aboutMePage.classList.remove("show");
  }
});
