function generarTablasMultiplicar() {
    for (let numero = 1; numero <= 10; numero++) {
        console.log(`\nTabla de multiplicar del ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
}
generarTablasMultiplicar();
