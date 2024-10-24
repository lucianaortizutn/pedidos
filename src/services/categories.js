import { categoriaActiva } from "../../main";
import { getProductLocalStorage } from "../persistence/localStorage"
import { handleRenderList } from "../views/store";

// filtro por categoria
const handleFilterProductsByCategory  = (category) => {
    const products = getProductLocalStorage()
    switch (category) {
        case categoriaActiva:
        case "Todo":
            handleRenderList(products)
            break
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result  = products.filter(product => product.categoria === category)
            handleRenderList(result)
            break
        case "mayorPrecio":
            const resultMayor =  products.sort((a, b) => b.precio - a.precio)
            handleRenderList(resultMayor)
            break
        case "menorPrecio":
            const resultMenor =  products.sort((a, b) => a.precio - b.precio)
            handleRenderList(resultMenor)
            break
        default:
            break
    }
}


// render de la vista categorias
export const renderCategories = ()  => {
    const ulList = document.getElementById("listFilter")
    ulList.innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="Hamburguesas">Hamburguesas</li>
        <li id="Papas">Papas</li>
        <li id="Gaseosas">Gaseosas</li>
        <li id="mayorPrecio">Mayor precio</li>
        <li id="menorPrecio">Menor precio</li>
    `

    const liElements = ulList.querySelectorAll("li")
    liElements.forEach(li => {
        li.addEventListener("click",  () => {
            handleClick(li)
        })
    })

    const handleClick = (elemento)=> {
        handleFilterProductsByCategory(elemento.id)
        liElements.forEach(el => {
            if (el.classList.contains('liActive')) el.classList.remove('liActive')
            else 
                if (elemento === el) el.classList.add('liActive')
        });
    }
}
