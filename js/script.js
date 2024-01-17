document.addEventListener("DOMContentLoaded", function () {
  // Handle navbar links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", smoothScroll);
  });

  // Handle logo click
  document.getElementById("logo").addEventListener("click", smoothScroll);

  // Handle contact us button click
  document
    .getElementById("contactButton")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector("#contact").scrollIntoView({
        behavior: "smooth",
      });
    });
});

function smoothScroll(e) {
  e.preventDefault();
  var href = this.getAttribute("href");

  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    var cleanedHref = href.replace(/^\//, "");
    document.querySelector(cleanedHref).scrollIntoView({
      behavior: "smooth",
    });
  }
}

var swiper1 = new Swiper(".heroSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  direction: "horizontal",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

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
  loop: true,
  autoplay: false,
  autoplay: {
    delay: 950,
    disableOnInteraction: true,
  },
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
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper2 = new Swiper(".infra-swiper", {
  effect: "creative",
  pagination: {
    el: ".pagination",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});
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
