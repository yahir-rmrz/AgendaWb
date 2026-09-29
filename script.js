/* =========================
   MOSTRAR FORMULARIO
========================== */

function mostrarFormulario() {

    // Ocultamos la lista de eventos
    document.getElementById("seccionEventos").style.display = "none";

    // Ocultamos el calendario
    document.getElementById("calendario").style.display = "none";

    // Mostramos el formulario
    document.getElementById("formularioEvento").style.display = "block";

}



/* =========================
   OCULTAR FORMULARIO
========================== */

function ocultarFormulario() {

    // Mostramos nuevamente los eventos
    document.getElementById("seccionEventos").style.display = "block";

    // Mostramos nuevamente el calendario
    document.getElementById("calendario").style.display = "block";

    // Ocultamos el formulario
    document.getElementById("formularioEvento").style.display = "none";

}