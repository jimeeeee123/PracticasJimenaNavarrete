const boton = document.getElementById('btn-generar');
const inputJuego = document.getElementById('juego');
const inputCalificacion = document.getElementById('calificacion');
const textoResultado = document.getElementById('resultado');

const obtenerVeredicto = (nota) => {
if (nota >= 8) {
return "¡Literalmente una obra maestra, es cine!";
} else if (nota >= 5) {
return "Decente, sirve para pasar el rato :/";
} else {
return "Que borre la cuenta mejor x_x";
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

