const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

if ('serviceWorker' in navigator) { 
  navigator.serviceWorker.register('/service-worker.js') 
  .then(registration => { 
  console.log('Service Worker registered with scope:', registration.scope); 
  }) 
  .catch(error => { 
  console.log('Service Worker registration failed:', error); 
  }); 
  } 
  
navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  navToggle.firstElementChild.classList.contains("fa-bars")?
  navToggle.firstElementChild.classList.replace("fa-bars","fa-xmark"):
  navToggle.firstElementChild.classList.replace("fa-xmark","fa-bars");
});