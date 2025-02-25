
/*
  Inicialización del estado: Se inicializa el estado products como un arreglo vacío.
  Carga de datos: En el useEffect, se ejecuta la función Products, que llama a getProducts para obtener los productos de un API y luego actualiza el estado products con esos productos.
  Renderizado: Una vez que el estado products contiene los datos, React renderiza el componente ProductCard para cada producto.
  Actualización del estado: Cuando los productos se cargan, el estado products se actualiza y React vuelve a renderizar el componente App, mostrando la lista de productos.
  Este es un ejemplo básico de cómo trabajar con hooks como useState y useEffect en React para manejar estados y realizar llamadas a APIs.
*/


/*import { useEffect, useState } from "react"
import { getProducts } from "./app/services/products.servicio"
import { ProductCard } from "./app/ui/components/ProductCard"



const App = () => {
  const [products, setProducts] = useState([])

  useEffect( () => {
    const Products = async () => {
      const response = await getProducts()
      setProducts(response)
      
    }
    Products()
  },[])
  console.log(products)
  return (
    <div>
      
      {
        products.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))
      }
       
    </div>
  )
}



export default App;*/


import React from "react";
import Login from './app/ui/components/login'; // Ruta correcta del componente

function App() {
  return (
    <div className="App">
      <Login /> {/* Renderiza el componente Login */}
    </div>
  );
}

export default App;


