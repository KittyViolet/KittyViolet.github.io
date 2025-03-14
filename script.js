// Get elements for music player
const audioPlayer = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const progressBar = document.getElementById("progressBar");
const currentTimeElement = document.getElementById("currentTime");
const durationElement = document.getElementById("duration");

// Define your song playlist here (use your actual file paths for the .mp3s)
const songs = [
  "song1.mp3", // Replace with your actual song file path
  "song2.mp3", // Replace with your actual song file path
  "song3.mp3"  // Replace with your actual song file path
];

let currentSongIndex = 0; // Index of the currently playing song

// Function to load and play the song
function loadSong(songIndex) {
  audioPlayer.src = songs[songIndex];
  audioPlayer.load();
  audioPlayer.play();
  playPauseButton.textContent = "Pause"; // Change button text to "Pause"
}

// Play/Pause button click handler
playPauseButton.addEventListener("click", function () {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = "Pause"; // Change button text to "Pause"
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = "Play"; // Change button text to "Play"
  }
});

// Update progress bar and current time
audioPlayer.addEventListener("timeupdate", function () {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress;

  const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
  const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
  currentTimeElement.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;

  const durationMinutes = Math.floor(audioPlayer.duration / 60);
  const durationSeconds = Math.floor(audioPlayer.duration % 60);
  durationElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
});

// Progress bar input handler (to seek through the song)
progressBar.addEventListener("input", function () {
  const progress = progressBar.value;
  audioPlayer.currentTime = (progress / 100) * audioPlayer.duration;
});

// When the song ends, go to the next song (loop the playlist)
audioPlayer.addEventListener("ended", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the first song if at the end
  loadSong(currentSongIndex);
});

// Set initial duration of the song once it's loaded
audioPlayer.addEventListener("loadedmetadata", function () {
  const durationMinutes = Math.floor(audioPlayer.duration / 60);
  const durationSeconds = Math.floor(audioPlayer.duration % 60);
  durationElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
});

// Start with the first song
loadSong(currentSongIndex);

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
