import { productoActivo } from "../../main";
import { setProductLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal"
import { handleGetProductsToStore } from "../views/store";

const saveButton = document.getElementById('saveButton')
saveButton.addEventListener('click',  () => {
    handleSaveOrModifyElements()
})

export const handleSaveOrModifyElements  = () => {
    const nombre = document.getElementById('nombre').value,
        imagen = document.getElementById('imagen').value,
        precio = document.getElementById('precio').value,
        categoria = document.getElementById('categoria').value

    let product = null
    if (productoActivo) {
        product = {
            ...productoActivo, nombre, imagen, precio, categoria}
    } else {
        product = {id: new Date().toISOString(), nombre, imagen, precio, categoria}
    }

    setProductLocalStorage(product)
    handleGetProductsToStore()
    closeModal()
}