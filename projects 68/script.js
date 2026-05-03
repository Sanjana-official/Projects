const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const timeEl = document.getElementById("time");

// sample songs (replace with your files)
const songs = [
  {
    name: "song1",
    title: "Sample Song 1"
  },
  {
    name: "song2",
    title: "Sample Song 2"
  }
];

let index = 0;

// load song
function loadSong(song) {
  title.innerText = song.title;
  audio.src = `${song.name}.mp3`; // put files in same folder
}

// play/pause
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸️";
  } else {
    audio.pause();
    playBtn.innerText = "▶️";
  }
}

playBtn.addEventListener("click", togglePlay);

// next/prev
nextBtn.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  loadSong(songs[index]);
  audio.play();
  playBtn.innerText = "⏸️";
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(songs[index]);
  audio.play();
  playBtn.innerText = "⏸️";
});

// update progress
audio.addEventListener("timeupdate", () => {
  const { duration, currentTime } = audio;

  const percent = (currentTime / duration) * 100;
  progress.style.width = percent + "%";

  // time display
  const format = (t) => {
    const min = Math.floor(t / 60) || 0;
    const sec = Math.floor(t % 60) || 0;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  timeEl.innerText = `${format(currentTime)} / ${format(duration)}`;
});

// seek
progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});

// auto next
audio.addEventListener("ended", () => {
  nextBtn.click();
});

// init
loadSong(songs[index]);
