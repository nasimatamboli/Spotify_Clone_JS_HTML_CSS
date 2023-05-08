console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/one_last_time.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "One Last Time",
    filePath: "songs/one_last_time.mp3",
    coverPath: "covers/last_time.jpg",
  },
  {
    songName: "The Bohemian Girl",
    filePath: "songs/bohemian-girl.mp3",
    coverPath: "covers/boho_girl.jpg",
  },
  {
    songName: "A folk Story",
    filePath: "songs/a-folk-story.mp3",
    coverPath: "covers/folk_story.jpg",
  },
  {
    songName: "Epic",
    filePath: "songs/Epic.mp3",
    coverPath: "covers/motivational.jpg",
  },
  {
    songName: "Happy Mood",
    filePath: "songs/happy-mood.mp3",
    coverPath: "covers/happy_mood.jpg",
  },
  {
    songName: "Sufi Dance",
    filePath: "songs/sufi-dance.mp3",
    coverPath: "covers/sufi_dance.jpg",
  },
  {
    songName: "Sufi Song",
    filePath: "songs/sad-sufi.mp3",
    coverPath: "covers/sad.jpg",
  },
  {
    songName: "Classical",
    filePath: "songs/ambient-classical.mp3",
    coverPath: "covers/guitar.jpg",
  },
  {
    songName: "Trip",
    filePath: "songs/ukulele-trip.mp3",
    coverPath: "covers/trip.jpg",
  },
  {
    songName: "WaterFall",
    filePath: "songs/waterfall.mp3",
    coverPath: "covers/waterfall.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //  console.log("time update");
  //Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      console.log(songs[songIndex].filePath);
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      console.log(masterSongName.innerText);
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
