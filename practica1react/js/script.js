const boton = document.getElementById('btn-generar');
const inputJuego = document.getElementById('juego');
const inputCalificacion = document.getElementById('calificacion');
const textoResultado = document.getElementById('resultado');

const obtenerVeredicto = (nota) => {
if (nota >= 8) {
return "¡Lo mejor de lo mejor, es excelente!";
} else if (nota >= 5) {
return "No tan mal, es interesante :/";
} else {
return "Mejor nadota -_-";
}
};

boton.addEventListener('click', () => {
    let nombreJuego = inputJuego.value;
    let nota = Number(inputCalificacion.value);
    if(nombreJuego === "" || inputCalificacion.value === ""){
        textoResultado.innerText ="Oye tia, pon un nombre y una nota válida.";
        return;
    }

    let veredictoFinal = obtenerVeredicto(nota);

textoResultado.innerText = `Mi veredicto sobre "${nombreJuego}" es un 
${nota}/10. ${veredictoFinal}`;
});

