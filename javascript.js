console.log("Hello World");
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  window.location.href = window.location.origin + "/success.html";
});


gsap.fromTo("#main_image", 
  { scale: 0.8, opacity: 0 }, 
  { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
);