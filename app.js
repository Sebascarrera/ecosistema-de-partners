// Fecha objetivo (debe estar en formato "YYYY-MM-DDTHH:MM:SS")
const fechaObjetivo = new Date("2023-11-02T16:30:00").getTime();

function actualizarTemporizador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia > 0) {
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').innerHTML = dias;
    document.getElementById('horas').innerHTML = horas < 10 ? `0${horas}` : horas;
    document.getElementById('minutos').innerHTML = minutos < 10 ? `0${minutos}` : minutos;
    document.getElementById('segundos').innerHTML = segundos < 10 ? `0${segundos}` : segundos;
  } else {
    // Cuando la fecha objetivo ha pasado, puedes mostrar un mensaje o tomar alguna acción.
    document.getElementById('dias').innerHTML = "00";
    document.getElementById('horas').innerHTML = "00";
    document.getElementById('minutos').innerHTML = "00";
    document.getElementById('segundos').innerHTML = "00";
  }
}

setInterval(actualizarTemporizador, 1000);
