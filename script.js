// About Me Modal Functionality
const aboutMeButton = document.getElementById("aboutMeButton");
const aboutMeModal = document.getElementById("aboutMeModal");
const closeModal = document.getElementById("closeModal");

aboutMeButton.addEventListener("click", function () {
  aboutMeModal.style.display = "block";
});

closeModal.addEventListener("click", function () {
  aboutMeModal.style.display = "none";
});

// Close the modal when clicking anywhere outside of it
window.addEventListener("click", function (event) {
  if (event.target === aboutMeModal) {
    aboutMeModal.style.display = "none";
  }
});
