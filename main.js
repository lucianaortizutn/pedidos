import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";
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

const addButton = document.getElementById('addButton')
addButton.addEventListener('click',  () => {
    openModal()
})

const searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click',  () => {
    handleSearchProductByName('h')
})