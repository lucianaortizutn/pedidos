import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { getProductLocalStorage, setProductLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal"
import { handleGetProductsToStore, handleRenderList } from "../views/store";

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

    Swal.fire(
        `Producto "${nombre}" guardado correctamente.`, 
        `Podrá visualizar el producto en la sección ${categoria}.`
        , 'success'
    )


    setProductLocalStorage(product)
    handleGetProductsToStore()
    closeModal()
}

export const handleDeleteProduct = () => {
    Swal.fire({
        title: `¿Desea eliminar "${productoActivo.nombre}?"`,
        text: "No será posible revertir esta acción.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ABC270",
        cancelButtonColor: "#F5D547",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            
            const products = getProductLocalStorage()
            const result = products.filter(product => product.id !== productoActivo.id)
            
            localStorage.setItem('products', JSON.stringify(result))
            handleRenderList(result)
            closeModal()
            Swal.fire({
                title: "Eliminado",
                text: "El producto se ha eliminado correctamente.",
                icon: "success"
            });
        }
      });
}
