import { getProductLocalStorage } from "../persistence/localStorage"

/* ------------ STORE ------------ */
export const handleGetProductsToStore = ()  => {
    const products = getProductLocalStorage()
    handleRenderList(products)
}

export const handleRenderList = (products)  => {
    const burguers = products.filter(p => p.categoria  === 'Hamburguesas')
    const fries = products.filter(p => p.categoria  === 'Papas')
    const sode = products.filter(p => p.categoria  === 'Gaseosas')

    const renderProductGroup = (products, title) => {
        if  (products.length > 0) {
            const productosHTML = products.map((producto, index) => {
              return `
                <div class="containerTargetItem" id="product-${producto.categoria}-${index}">
                    <div class="containerImg">
                        <img src='${producto.imagen}'/>
                    </div>
                    <div>
                        <h3>${producto.nombre}</h3>
                    </div>
                    <div class="targetProps">
                        <p><b>Precio:</b> $ ${producto.precio}</p>
                    </div>
                </div>
              `  
            })
            return `
                <section class="sectionStore">
                    <h2>${title}</h2>
                    <div class="container_Product">
                        ${productosHTML.join("")}
                    </div>
                </section>
            `
        } else {
            return  ''

        }
    }

    // renderizar cada uno de los productos

    const appContainer = document.getElementById("storeContainer")
    appContainer.innerHTML = `
        ${renderProductGroup(burguers, 'Hamburguesas')}
        ${renderProductGroup(fries, 'Papas')}
        ${renderProductGroup(sode, 'Gaseosas')}
    `

    const addEvents  = (products) => {
        products.forEach((product, index) => {
            const productContainer = document.getElementById(`product-${product.categoria}-${index}`)
            productContainer.addEventListener('click', () => {
                console.log(product)
            })
        });
    }

    addEvents(burguers)
    addEvents(fries)
    addEvents(sode)

}
