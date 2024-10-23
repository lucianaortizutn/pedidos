import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import { setProductLocalStorage } from "./src/persistence/localStorage";
import './style.css';

export let categoriaActiva = null
export const setCategoriaActiva = (categoria) => {
    categoriaActiva = categoria
}

export let productoActivo = null
export const setProductoActivo = (producto) => {
    productoActivo = producto
}

renderCategories()
handleGetProductsToStore()

/* ------------ PRODUCT ------------ */
const addButton = document.getElementById('addButton')

addButton.addEventListener('click',  () => {
    openModal()
})

/* ------------ POP UP ------------ */
const cancelButton = document.getElementById('cancelButton')

cancelButton.addEventListener('click',  () => {
    closeModal()
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


// GUARDAR O MODIFICAR
const saveButton = document.getElementById('saveButton')

saveButton.addEventListener('click',  () => {
    handleSaveOrModifyElements()
})

const handleSaveOrModifyElements  = () => {
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
