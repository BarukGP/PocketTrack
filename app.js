const movimientos = [];

const btnAbrir = document.getElementById("abrir_formularo");
const modalMovimiento = document.getElementById("modal-movimiento");
btnAbrir.addEventListener("click", () => {
    modalMovimiento.showModal();
});

const btnCancelar = document.getElementById("cancelar-movimiento");
btnCancelar.addEventListener("click", () => {
    modalMovimiento.close();
});

const formMovimiento = document.getElementById("form-movimiento");
formMovimiento.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const descripcion = document.getElementById("descripcion").value;
    const tipo = document.getElementById("tipo").value;
    const categoria = document.getElementById("categoria").value;
    const fecha = document.getElementById("fecha").value;
    const monto = document.getElementById("monto").valueAsNumber;

    const movimiento = {
        tipo, descripcion, categoria, fecha, monto
    }
    movimientos.push(movimiento);
    mostrarMovimientos();
    formMovimiento.reset();
    modalMovimiento.close();
    
    console.log(movimientos);
    
});

const listaMovimientos = document.getElementById("lista-movimientos");


function mostrarMovimientos() {
    
    listaMovimientos.textContent = "";
    movimientos.forEach((movimiento) => {
        const fila = document.createElement("li");
        const descripcion = document.createElement("span");
        descripcion.className = "descripcion";
        descripcion.textContent = movimiento.descripcion;
        const fecha = document.createElement("span");
        fecha.className = "fecha";
        fecha.textContent = movimiento.fecha;
        const importe = document.createElement("span");
        importe.className = "importe-movimiento";
        importe.textContent = movimiento.monto;
        fila.append(descripcion, fecha, importe);
        listaMovimientos.append(fila);
        
       

    });
}
