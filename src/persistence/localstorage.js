export const getProductLocalStorage  = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    return products ?  products : [];
}

export const setProductLocalStorage = (product) => {
    let productsInLocalStorage =  getProductLocalStorage();

    const existingIndex  = productsInLocalStorage.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
        productsInLocalStorage[existingIndex]  = product;
    } else {
        productsInLocalStorage.push(product);
    }

    localStorage.setItem('products', JSON.stringify(productsInLocalStorage))
}
