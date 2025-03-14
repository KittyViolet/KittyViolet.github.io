// Get modal and buttons for the clickable image
const modal = document.getElementById("blurModal");
const exploreImage = document.getElementById("exploreImage");
const closeButton = document.getElementsByClassName("close")[0];

// Open the modal when the image is clicked
exploreImage.onclick = function() {
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

// Audio player functionality
const audioPlayer = document.getElementById("audioPlayer");
const progressBar = document.getElementById("progressBar");
const playPauseButton = document.getElementById("playPauseButton");

// Play/Pause button logic
playPauseButton.onclick = function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.innerText = "Pause";
  } else {
    audioPlayer.pause();
    playPauseButton.innerText = "Play";
  }
};

// Update the progress bar based on the audio current time
audioPlayer.ontimeupdate = function() {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress;
};

// Set up the event listener for progress bar interaction
progressBar.oninput = function() {
  const seekTime = (progressBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTime;
};
