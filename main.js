
let temporizador;
let minutos = 90;
let segundos = 0;
let temporizador_activo = false;

const fin_audio=new Audio ("./sounds/win.wav");

const LISTA_TAREAS = document.querySelector("#lista-tareas");
const FORMULARIO_TAREAS = document.querySelector("#formularios-tareas");
const NUEVA_TAREA = document.querySelector("#nueva-tarea");
const BOTON_INICIAR = document.querySelector("#boton-iniciar");
const BOTON_DETENER = document.querySelector("#boton-detener");
const BOTON_REINICIAR = document.querySelector("#boton-reiniciarsss");

function actualizarTemporizador() {

    const TEMPORIZADOR_DISPLAY = document.querySelector("#temporizador")

    TEMPORIZADOR_DISPLAY.innerHTML = `${minutos < 10 ? "0" : ""}${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;

}
function iniciarTemporizador() {

    temporizador_activo = true;
    temporizador = setInterval(function () {

        if (minutos == 0 && segundos == 0) {
            setInterval(temporizador);
            temporizador_activo = false
             fin_audio.play();
        } else if (segundos == 0) {

            minutos--;
            segundos = 59;
        }
        else {
            segundos--;
        }
        actualizarTemporizador();
    }, 1000);
}
function detenerTemporizador() {

    clearInterval(temporizador);
    temporizador_activo = false;

}
BOTON_INICIAR.addEventListener("click", () => {

    if (!temporizador_activo) {

        iniciarTemporizador()

    }

});
BOTON_DETENER.addEventListener("click", () => {

    if (temporizador_activo) {

        detenerTemporizador();

    }
});
BOTON_REINICIAR.addEventListener("click", () => {

    detenerTemporizador();
    minutos = 25;
    segundos = 0;
    actualizarTemporizador();
})

FORMULARIO_TAREAS.addEventListener("submit",(e)=> {

    e.preventDefault();

    const NUEVA_TAREA_TEXTO = NUEVA_TAREA.value.trim();

    if (NUEVA_TAREA_TEXTO != "") {

        agregarTarea(NUEVA_TAREA_TEXTO);
        NUEVA_TAREA.value = "";
    }
})
function agregarTarea(texto) {

    const li = document.createElement("li");
    li.textContent = texto;
    li.addEventListener("click",AlternarCompletadoTarea)
    LISTA_TAREAS.appendChild(li);
  
  

}
function AlternarCompletadoTarea(e) {
    e.target.classList.toggle(`completada`);
    
}

window.addEventListener("load",()=>{

       actualizarTemporizador();

});