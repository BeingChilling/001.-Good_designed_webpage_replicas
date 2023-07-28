"use strict";

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^FAVORITE^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const typeBtns = document.querySelectorAll(".favorite-type");
const displays = document.querySelectorAll(".display");

typeBtns.forEach((typeBtn, i) => {
  typeBtn.addEventListener("click", function () {
    // Reset all display colors to their default (black) first
    // displays.forEach((display) => {
    //   display.style.color = "black";
    // });

    // Set the clicked display text color to red
    document.querySelector(".active")?.classList.remove("active");
    displays[i].classList.add("active");
  });
});

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^For Sale section^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// const slides = document.querySelectorAll(".slides");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const slides = document.querySelectorAll(".slide");
const images = document.querySelectorAll(".img-container");

let curSlide = 1;

images.forEach(
  (image, i) => (image.style.transform = `translateX(${100 * (i - 1)}%)`)
);

nextBtn.addEventListener("click", function () {
  const maxSlide = images.length;
  if (curSlide === maxSlide - 2) {
    curSlide = 1;
  } else {
    curSlide++;
  }
  images.forEach(
    (image, i) =>
      (image.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});
// ---------------------------------------------------------------------------------------------------

// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - 1)}%)`));

// let curSlide = 1;
// const maxSlide = slides.length;

// nextBtn.addEventListener("click", function () {
//   if (curSlide === maxSlide - 2) {
//     curSlide = 1;
//   } else {
//     curSlide++;
//   }
//   slides.forEach(
//     (slide, i) =>
//       (slide.style.transform = `translateX(${100 * (i - curSlide)}%)`)
//   );
// });
