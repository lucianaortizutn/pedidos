# Proyecto de Tienda - Primer Parcial

Este proyecto es una aplicación de tienda que permite agregar, modificar y eliminar productos. También incluye la capacidad de filtrar los productos por categoría y gestionar la información almacenada en el `localStorage` del navegador.

## Estructura del Proyecto

- **index.html**: Contiene la estructura de la página, incluyendo el formulario para agregar productos y la visualización de la tienda.
- **style.css**: Archivo de estilos que define la apariencia de la aplicación.
- **main.js**: Archivo principal que inicializa los componentes y gestiona los eventos.
- **localStorage.js**: Contiene funciones para obtener y almacenar productos en el `localStorage`.
- **categories.js**: Gestiona el filtrado de productos por categorías y el renderizado de la lista de categorías.
- **products.js**: Contiene la lógica para agregar o modificar productos y actualizar la lista de productos.
- **modal.js**: Controla la apertura, cierre y reseteo del modal utilizado para agregar o editar productos.
- **store.js**: Controla la visualización de los productos en la tienda y la lógica para agregar eventos a cada producto.

## Funcionalidades

1. **Agregar Productos**: Puedes agregar un nuevo producto especificando un nombre, imagen, precio y categoría. Los productos se guardan en el `localStorage`.
   
2. **Modificar Productos**: Puedes hacer clic en un producto para abrir un modal con la información precargada, lo que te permite modificar el producto.

3. **Eliminar Productos**: Actualmente, hay un botón de "Eliminar" en el modal, que eliminará el producto seleccionado.

4. **Filtrado por Categorías**: Puedes filtrar los productos por categorías: Hamburguesas, Papas, Gaseosas, o mostrar todos los productos.

5. **Persistencia en LocalStorage**: Todos los productos se guardan en el `localStorage`, por lo que al recargar la página los productos seguirán estando disponibles.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local.
    ```bash
    git clone https://github.com/usuario/proyecto-tienda.git
    ```

2. Ejecuta
```bash
npm run dev
```

## Requisitos

Este proyecto no requiere de ninguna instalación adicional. Todo el código está escrito en HTML, CSS y JavaScript puro, por lo que solo necesitas un navegador y tener instalado Node.

## Estructura de Carpetas

```bash
.
├── index.html
├── main.js
├── src
│   ├── services
│   │   ├── categories.js
│   │   ├── product.js
│   │   └── searchBar.js
│   ├── views
│   │   ├── modal.js
│   │   └── store.js
│   └── persistence
│       └── localStorage.js
└── style.css
```
