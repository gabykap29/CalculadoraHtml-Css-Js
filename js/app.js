const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const botonesNum = document.querySelectorAll('.number');
const botonesOpera= document.querySelectorAll('.operator');
const displayOperacion = document.getElementById('operation');
const botonEliminar = document.getElementById('eliminarSimple');
const botonEliminarTodo = document.getElementById('Eliminar');
const botonIgual = document.getElementById('igual');
const motorCalculadora = {};

motorCalculadora.suma = (num1, num2) => {
    return num1 + num2;
}
motorCalculadora.resta = (num1, num2) => {
    return num1 - num2;
}
motorCalculadora.multiplicar = (num1, num2) => {
    return num1 * num2;
}
motorCalculadora.dividir = (num1, num2) => {
    return num1 / num2;
}

let operacion = ''; // Variable para almacenar la operación

// Asignar un evento a cada botón de número
botonesNum.forEach(button => {
    button.addEventListener('click', () => {
        const valorNumero = button.textContent;
             if(valorNumero === "."){
                if(displayValorActual.innerHTML.includes(".")){
                    displayValorActual.innerHTML += "";
                 }else{
                    displayValorActual.innerHTML += valorNumero;
                 }
             }else{
                displayValorActual.innerHTML += valorNumero;
             }
            

    })
});
// Asignar un evento a cada botón de operación
botonesOpera.forEach(button => {
    button.addEventListener('click', () => {
        const valorOperacion = button.textContent;
        operacion = valorOperacion; // Almacena la operación seleccionada en la variable operacion
        displayOperacion.innerHTML = valorOperacion; // Muestra la operación en el display de operaciones
        displayValorAnterior.innerHTML = displayValorActual.textContent;
        displayValorActual.innerHTML = " ";
    })
});

//boton de eliminar
botonEliminar.addEventListener('click',()=>{
    displayValorActual.innerHTML = displayValorActual.innerHTML.slice(0,-1); 
});
//boton eliminar todo
botonEliminarTodo.addEventListener('click',()=>{
    displayValorActual.innerHTML = "";
    displayValorAnterior.innerHTML = "";
    displayOperacion.innerHTML = "";
})
// boton igual
botonIgual.addEventListener('click',()=>{
    let num1 = Number(displayValorAnterior.textContent);
    let num2 = Number(displayValorActual.textContent);
    switch (operacion) {
        case "+":
            displayValorAnterior.innerHTML = `${displayValorAnterior.textContent} ${displayOperacion.textContent} ${displayValorActual.textContent}`
            displayOperacion.innerHTML = "";
            displayValorActual.innerHTML = motorCalculadora.suma(num1,num2);
            break;
        case "-":
            displayValorAnterior.innerHTML = `${displayValorAnterior.textContent} ${displayOperacion.textContent} ${displayValorActual.textContent}`
            displayOperacion.innerHTML = "";
            displayValorActual.innerHTML =motorCalculadora.resta(num1,num2);
            break;
        case "x":
            displayValorAnterior.innerHTML = `${displayValorAnterior.textContent} ${displayOperacion.textContent} ${displayValorActual.textContent}`
            displayOperacion.innerHTML = "";
            displayValorActual.innerHTML =motorCalculadora.multiplicar(num1,num2);
            break;
        case "/":
            displayValorAnterior.innerHTML = `${displayValorAnterior.textContent} ${displayOperacion.textContent} ${displayValorActual.textContent}`
            displayOperacion.innerHTML = "";
            displayValorActual.innerHTML =motorCalculadora.dividir(num1,num2);
            break;
        default:
            displayValorActual.innerHTML = "Sintax Error"
            break;
    }
})




