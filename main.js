import { renderCategories } from "./src/services/categories";
import './style.css';

renderCategories()

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
const openModal = () => {
    const modal = document.getElementById('modalPopUp')
    modal.style.display = 'flex'
}

const closeModal = () => {
    const modal = document.getElementById('modalPopUp')
    modal.style.display = 'none'
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

    console.log({nombre, imagen, precio, categoria});

    closeModal()
}