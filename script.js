// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});
// End of Navbar

// Section 2 Video
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons button i");
const bar = document.querySelector(".video-bar");

const playPause = () => {
  if (video.paused) {
    video.play();
    btn.className = "far fa-pause-circle";
    video.style.opacity = ".7";
  } else {
    video.pause();
    btn.className = "far fa-play-circle";
    video.style.opacity = ".3";
  }
};

btn.addEventListener("click", () => {
  playPause();
});

video.addEventListener("timeupdate", () => {
  console.log(video.currentTime, video.duration);
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%`;
  if (video.ended) {
    btn.className = "far fa-play-circle";
    video.style.opacity = ".3";
  }
});
// End of Section 2 Video

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

// submit the form
document
  .querySelector(".drink-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector(".input-name").value;
    const lastName = document.querySelector(".input-lastname").value;
    const email = document.querySelector(".input-email").value;

    let value = ui.checkEmpty(name, lastName, email);

    if (value) {
      let customer = new Customer(name, lastName, email);
      console.log(customer);
      ui.addCustomer(customer);
      ui.showFeedback("custumer added to the list", "success");
      ui.clearFields();
    } else {
      ui.showFeedback("some form values empty", "error");
    }
  });
