import { productoActivo, setProductoActivo } from "../../main"
import { handleDeleteProduct, handleSaveOrModifyElements } from "../services/products"

/* ------------ POP UP ------------ */
const cancelButton = document.getElementById('cancelButton')
cancelButton.addEventListener('click',  () => {
    closeModal()
})

const deleteButton = document.getElementById('deleteButton')
deleteButton.addEventListener('click',  () => {
    handleDeleteProduct()
})

// FUNCIONES ABRIR Y CERRAR MODAL
export const openModal = () => {
    const modal = document.getElementById('modalPopUp')
    modal.style.display = 'flex'

    if (productoActivo) {
        const nombre = document.getElementById('nombre'),
        imagen = document.getElementById('imagen'),
        precio = document.getElementById('precio'),
        categoria = document.getElementById('categoria')
        nombre.value = productoActivo.nombre
        imagen.value = productoActivo.imagen
        precio.value = productoActivo.precio
        categoria.value = productoActivo.categoria
        deleteButton.style.display = 'block'
    } else {
        deleteButton.style.display = 'none'
    }
}

export const closeModal = () => {
    const modal = document.getElementById('modalPopUp')
    modal.style.display = 'none'
    setProductoActivo(null)
    resetModal()
}

const resetModal  = () => {
    const nombre = document.getElementById('nombre'),
        imagen = document.getElementById('imagen'),
        precio = document.getElementById('precio'),
        categoria = document.getElementById('categoria')
    nombre.value = ''
    imagen.value = ''
    precio.value = 0
    categoria.value = 0
}
