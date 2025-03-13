// Get modal and buttons
const modal = document.getElementById("contactModal");
const contactButton = document.getElementById("contactButton");
const closeButton = document.getElementsByClassName("close")[0];
const copyButton = document.getElementById("copyButton");
const contactInfo = document.getElementById("contactInfo");

// Open the modal when the Contact button is clicked
contactButton.onclick = function() {
  modal.style.display = "block";
};

// Close the modal when the close (X) button is clicked
closeButton.onclick = function() {
  modal.style.display = "none";
};

// Close the modal if the user clicks anywhere outside of the modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Copy the contact info to the clipboard when the copy button is clicked
copyButton.onclick = function() {
  const textToCopy = contactInfo.textContent;
  navigator.clipboard.writeText(textToCopy).then(function() {
    alert("Contact info copied to clipboard!");
  }, function(err) {
    alert("Failed to copy: " + err);
  });
};
