// DOM Elements
const navbar = document.querySelector(".navbar");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");
const galleryItems = document.querySelectorAll(".gallery-item img");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");

  const isExpanded = navLinks.classList.contains("active");
  mobileMenuBtn.setAttribute("aria-expanded", isExpanded);
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 10, 10, 0.95)";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0.8)"; // revert to original glass
    navbar.style.boxShadow = "none";
  }
});

const scrollElements = document.querySelectorAll(".fade-in-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add("visible");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

handleScrollAnimation();

galleryItems.forEach((img) => {
  img.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    lightboxImg.src = e.target.src;
    document.body.style.overflow = "hidden";
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
