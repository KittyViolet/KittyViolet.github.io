// Get modal and buttons
const modal = document.getElementById("aboutMeModal");
const aboutMeButton = document.getElementById("aboutMeButton");
const closeButton = document.getElementById("closeModal");

// Music player elements
const playPauseButton = document.getElementById("playPauseButton");
const audioPlayer = document.getElementById("audioPlayer");
const progressBar = document.getElementById("progressBar");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");

let isPlaying = false;

// Open the modal when the "About Me" button is clicked
aboutMeButton.onclick = function () {
  modal.style.display = "block";
};

// Close the modal when the close (X) button is clicked
closeButton.onclick = function () {
  modal.style.display = "none";
};

// Close the modal if the user clicks anywhere outside of the modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Play/Pause functionality
playPauseButton.onclick = function () {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseButton.textContent = "Play";
  } else {
    audioPlayer.play();
    playPauseButton.textContent = "Pause";
  }
  isPlaying = !isPlaying;
};

// Update progress bar and time
audioPlayer.ontimeupdate = function () {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;
  const progress = (currentTime / duration) * 100;

  progressBar.value = progress;

  // Display current time and duration
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
};

// Format time to MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

// Update the audio time when the progress bar is changed
progressBar.oninput = function () {
  const value = progressBar.value;
  const duration = audioPlayer.duration;
  audioPlayer.currentTime = (value / 100) * duration;
};

// Add more .mp3 files below by updating the audio source
function changeSong(songPath) {
  const audioSource = document.getElementById("audioSource");
  audioSource.src = songPath;
  audioPlayer.load();
  audioPlayer.play();
  playPauseButton.textContent = "Pause";
  isPlaying = true;
}
