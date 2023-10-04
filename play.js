var video = document.getElementById("myVideo");

// Función para reproducir o pausar el video al hacer clic en el video mismo
video.addEventListener("click", "touchstart", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});