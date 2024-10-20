// Variables globales para almacenar números
var numero1;
var numero2;

// Función principal para manipular la pantalla de la calculadora
const pantalla = document.getElementById("pantalla");

// Función para agregar un valor a la pantalla
function agregarPantalla(value) {
    // Concatenar el valor recibido a la pantalla
    pantalla.value += value;
}

// Función para limpiar la pantalla
function limpiarPantalla() {
    // Limpiar el contenido de la pantalla
    pantalla.value = "";
}

// Función para calcular el resultado de la expresión
function igual() {
    try {
        // Evaluar la expresión en la pantalla
        const resultado = eval(pantalla.value);
        // Limpiar la pantalla antes de mostrar el resultado
        limpiarPantalla();
        // Mostrar el resultado en la pantalla
        pantalla.value += resultado;
    } catch (error) {
        // Manejar errores en la evaluación
        pantalla.value = "Error";
    }
}
