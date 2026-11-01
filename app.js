const btnAbrir = document.getElementById("abrir_formularo");
const modalMovimiento = document.getElementById("modal-movimiento");
btnAbrir.addEventListener("click", () => {
    modalMovimiento.showModal();
});

const btnCancelar = document.getElementById("cancelar-movimiento");
btnCancelar.addEventListener("click", () => {
    modalMovimiento.close();
});