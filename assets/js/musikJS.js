function togglePlay(button) {
  const card = button.closest(".card"); // Cari elemen card terdekat
  const audio = card.querySelector(".musicPlayer"); // Ambil elemen audio dalam card itu
  const playPauseIcon = button.querySelector("i"); // Ikon play/pause

  // Hentikan audio lain
  document.querySelectorAll(".musicPlayer").forEach((otherAudio) => {
    const otherIcon = otherAudio.closest(".card").querySelector("i");
    if (otherAudio !== audio) {
      otherAudio.pause();
      otherAudio.currentTime = 0; // Reset audio lainnya
      otherIcon.classList.replace("bi-pause-fill", "bi-play-fill");
    }
  });

  // Toggle play/pause pada card yang diklik
  if (audio.paused) {
    audio.play();
    playPauseIcon.classList.replace("bi-play-fill", "bi-pause-fill");
  } else {
    audio.pause();
    playPauseIcon.classList.replace("bi-pause-fill", "bi-play-fill");
  }
}
