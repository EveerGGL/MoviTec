// Simulación de funcionalidad del prototipo
document.addEventListener('DOMContentLoaded', () => {
    console.log("TecPool Prototype Ready");
});

// Función para el botón de pánico
function triggerSOS() {
    const confirmación = confirm("¿Deseas enviar tu ubicación en tiempo real a seguridad del campus y contactos de emergencia?");
    if (confirmación) {
        alert("🚨 Alerta enviada. Mantén la calma, la ayuda está en camino.");
    }
}

// Simulación de búsqueda de viaje
function buscarViaje() {
    const destino = document.getElementById('search-dest').value;
    if (destino) {
        alert("Buscando conductores hacia: " + destino);
        // Aquí podrías ocultar/mostrar elementos con CSS
    }
}