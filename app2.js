function pinta() {
    let cantidad = parseInt(prompt("¿Cuántos '+' quieres vertical?"));
    let cadena1 = " ";
    for (let i = 1; i <= cantidad; i++) {
        cadena1 = cadena1 + " +";
    }
    console.log(cadena1);
}
pinta();
function pinta2() {
    let cantidad = parseInt(prompt("¿Cuántos '+' quieres horizontal?"));
    let cadena1 = " ";
    for (let i = 1; i <= cantidad; i++) {
        cadena1 = cadena1 + "\n +";
    }
    console.log(cadena1);
}
pinta2();
