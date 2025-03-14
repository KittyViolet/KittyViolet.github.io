// Audio Player (Play/Pause functionality)
const audioPlayer = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const progressBar = document.getElementById("progressBar");

// Update the progress bar as the audio plays
audioPlayer.ontimeupdate = function() {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress;
};

// Play/Pause functionality
let isPlaying = false;

playPauseButton.onclick = function() {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseButton.innerHTML = `<i class="fas fa-play"></i>`;  // Only display play icon
  } else {
    audioPlayer.play();
    playPauseButton.innerHTML = `<i class="fas fa-pause"></i>`;  // Only display pause icon
  }
  isPlaying = !isPlaying;  // Toggle the play state
};

// Allow users to click the progress bar to change the current time of the audio
progressBar.oninput = function() {
  const value = progressBar.value;
  audioPlayer.currentTime = (value / 100) * audioPlayer.duration;
};

// Modal functionality for "About Me" button
const aboutModal = document.getElementById("aboutModal");
const aboutButton = document.getElementById("aboutButton");
const closeButton = document.getElementsByClassName("close")[0];

// Open the modal when the "About Me" button is clicked
aboutButton.onclick = function() {
  aboutModal.style.display = "block";
};

// Close the modal when the X is clicked
closeButton.onclick = function() {
  aboutModal.style.display = "none";
};

// Close the modal if the user clicks anywhere outside of the modal
window.onclick = function(event) {
  if (event.target === aboutModal) {
    aboutModal.style.display = "none";
  }
};
