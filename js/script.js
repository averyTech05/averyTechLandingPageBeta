var swiper1 = new Swiper(".heroSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  direction: "horizontal",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // on: {
  //   transitionStart: function () {
  //     var videos = document.querySelectorAll("video");
  //     Array.prototype.forEach.call(videos, function (video) {
  //       video.pause();
  //     });
  //   },

  //   transitionEnd: function () {
  //     var activeIndex = this.activeIndex;
  //     var activeSlide =
  //       document.getElementsByClassName("swiper-slide")[activeIndex];
  //     var activeSlideVideo = activeSlide.getElementsByTagName("video")[0];
  //     activeSlideVideo.play();
  //   },
  // },
});

/*
inspiration
https://dribbble.com/shots/4684682-Aquatic-Animals
*/

var swiper2 = new Swiper(".capability-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  autoplay: false,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1560: {
      slidesPerView: 3,
    },
  },
});

var swiper3 = new Swiper(".company-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  spaceBetween: 30,
  loop: false,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

swiper.slideTo(1, false, false);

let currentSlide = 1;
let isPaused = false; // Variable to check if the slideshow is paused

const updateZoomClass = () => {
  // Iterate over each radio button to determine the active slide
  document
    .querySelectorAll('input[type="radio"][name="slider"]')
    .forEach((radio, index) => {
      const container = document.querySelector(
        `label[for="${radio.id}"] .zoom-container`
      );
      if (radio.checked && container) {
        container.classList.add("can-zoom");
      } else {
        container.classList.remove("can-zoom");
      }
    });
};

// Function to change the slide
const changeSlide = () => {
  if (!isPaused) {
    currentSlide = (currentSlide % 8) + 1; // Ensure the slide number wraps around
    const activeSlide = document.getElementById(`s${currentSlide}`);
    activeSlide.checked = true;

    updateZoomClass();
  }
};

// Start the auto-scroll
let slideInterval = setInterval(changeSlide, 5000);

// Pause and resume functions
const pauseSlide = () => {
  isPaused = true;
  updateZoomClass();
};
const resumeSlide = () => {
  isPaused = false;
  updateZoomClass();
};

// Event listeners for pausing and resuming on hover
document.querySelectorAll(".zoom-container").forEach((container) => {
  container.addEventListener("mouseover", pauseSlide);
  container.addEventListener("mouseout", resumeSlide);
});

// Initialize
updateZoomClass();

// let currentSlide = 1;
// let isPaused = false; // Variable to check if the slideshow is paused

// // Function to change the slide
// const changeSlide = () => {
//   if (!isPaused) {
//     // Remove 'can-zoom' class from all slides
//     // Existing code for removing 'can-zoom' class and setting active slide
//     document.querySelectorAll(".zoom-container").forEach((container) => {
//       container.classList.remove("can-zoom");
//     });

//     const activeSlide = document.getElementById(`s${currentSlide}`);
//     activeSlide.checked = true;

//     const activeContainer = document.querySelector(
//       `.zoom-container[data-slide="${currentSlide}"]`
//     );
//     if (activeContainer) {
//       activeContainer.classList.add("can-zoom");
//     }

//     // Move to the next slide
//     currentSlide++;
//     if (currentSlide > 8) {
//       currentSlide = 1;
//     }
//   }
// };

// // Start the auto-scroll
// let slideInterval = setInterval(changeSlide, 5000);

// // Pause and resume functions
// const pauseSlide = () => {
//   isPaused = true;
// };
// const resumeSlide = () => {
//   isPaused = false;
// };

// // Event listeners for pausing and resuming on hover
// document.querySelectorAll(".zoom-container").forEach((container) => {
//   container.addEventListener("mouseover", pauseSlide);
//   container.addEventListener("mouseout", resumeSlide);
// });

// const boxes = document.querySelectorAll(".box");
// let activeIndex = 1;
// let isTransitioning = false;

// function updateCurrentImg() {
//   isTransitioning = true;

//   boxes.forEach((box, index) => {
//     const isActive = index === activeIndex;
//     box.classList.toggle("expanded", isActive);
//     box.classList.toggle("closed", !isActive);
//   });

//   setTimeout(() => {
//     isTransitioning = false;
//   }, 500);
// }

// function handleArrowKey(event) {
//   if (isTransitioning) {
//     return;
//   }

//   if (event.key === "ArrowRight") {
//     activeIndex = (activeIndex + 1) % boxes.length;
//   } else if (event.key === "ArrowLeft") {
//     activeIndex = (activeIndex - 1 + boxes.length) % boxes.length;
//   }

//   updateCurrentImg();
// }

// function handleBoxClick(index) {
//   if (isTransitioning) {
//     return;
//   }

//   if (index === activeIndex && boxes[index].classList.contains("expanded")) {
//     boxes.forEach((box) => box.classList.remove("closed", "expanded"));
//     activeIndex = 0;
//   } else {
//     activeIndex = index;
//     updateCurrentImg();
//   }
// }

// document.addEventListener("keydown", handleArrowKey);

// updateCurrentImg();

// boxes.forEach((box, index) => {
//   box.addEventListener("click", () => handleBoxClick(index));
// });

/*
inspiration
https://dribbble.com/shots/4684682-Aquatic-Animals
*/

// var swiper = new Swiper(".swiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 3,
//     slideShadows: true,
//   },
//   keyboard: {
//     enabled: true,
//   },
//   mousewheel: {
//     thresholdDelta: 70,
//   },
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 1,
//     },
//     1024: {
//       slidesPerView: 2,
//     },
//     1560: {
//       slidesPerView: 3,
//     },
//   },
// });

// // Burger menus
// document.addEventListener("DOMContentLoaded", function () {
//   // open
//   const burger = document.querySelectorAll(".navbar-burger");
//   const menu = document.querySelectorAll(".navbar-menu");

//   if (burger.length && menu.length) {
//     for (var i = 0; i < burger.length; i++) {
//       burger[i].addEventListener("click", function () {
//         for (var j = 0; j < menu.length; j++) {
//           menu[j].classList.toggle("hidden");
//         }
//       });
//     }
//   }

//   // close
//   const close = document.querySelectorAll(".navbar-close");
//   const backdrop = document.querySelectorAll(".navbar-backdrop");

//   if (close.length) {
//     for (var i = 0; i < close.length; i++) {
//       close[i].addEventListener("click", function () {
//         for (var j = 0; j < menu.length; j++) {
//           menu[j].classList.toggle("hidden");
//         }
//       });
//     }
//   }

//   if (backdrop.length) {
//     for (var i = 0; i < backdrop.length; i++) {
//       backdrop[i].addEventListener("click", function () {
//         for (var j = 0; j < menu.length; j++) {
//           menu[j].classList.toggle("hidden");
//         }
//       });
//     }
//   }
// });

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: true,
//   },

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

// var mySwiper = new Swiper(".swiper-container-1", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: false,
//   direction: "horizontal",

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   on: {
//     transitionStart: function () {
//       var videos = document.querySelectorAll("video");
//       Array.prototype.forEach.call(videos, function (video) {
//         video.pause();
//       });
//     },

//     transitionEnd: function () {
//       var activeIndex = this.activeIndex;
//       var activeSlide =
//         document.getElementsByClassName("swiper-slide")[activeIndex];
//       var activeSlideVideo = activeSlide.getElementsByTagName("video")[0];
//       activeSlideVideo.play();
//     },
//   },
// });

// const openModal = () => {
//   // document.getElementById("button").classList.add("hidden");
//   document.getElementById("modal").classList.remove("hidden");
// };
// const closeModal = () => {
//   // document.getElementById("button").classList.remove("hidden");
//   document.getElementById("modal").classList.add("hidden");
// };
