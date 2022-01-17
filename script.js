"use strict";

const section = document.querySelector("#about-me-page");
const body = document.querySelector("body");

const pageWidth = () => {
  let scrollWidth = body.getBoundingClientRect();
  console.log(scrollWidth.width);
};
console.log(body.getBoundingClientRect());

window.addEventListener("scroll", pageWidth());
