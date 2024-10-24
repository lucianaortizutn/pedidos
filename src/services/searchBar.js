import { getProductLocalStorage } from "../persistence/localStorage"
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () => {
    const name = document.getElementById('nameSearch').value
    const products = getProductLocalStorage()
    const productsByName = products.filter(product => product.nombre.toLowerCase().includes(name.toLowerCase()))
    handleRenderList(productsByName)
}