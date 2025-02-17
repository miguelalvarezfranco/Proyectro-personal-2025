/* eslint-disable react/prop-types */
/*
  Este código es un componente funcional en React llamado ProductCard, que recibe un objeto product como prop y renderiza una tarjeta de producto.
  Importa un archivo CSS (card.css) para estilizar los elementos dentro del componente.
  Define el componente funcional ProductCard que recibe un objeto product como prop.
  Renderiza una tarjeta con:
  Un div contenedor.
  Una imagen del producto (product.image).
  El título del producto (product.title).
  Aplica estilos CSS usando las clases definidas en card.css.
  Exporta el componente ProductCard para que pueda ser utilizado en otros componentes o archivos.
*/

import './card.css'

export const ProductCard = ({product}) => {
  return (
    <div className="container" >
      <img src={product.image} alt={product.title} className="product-image" />
      <h4 className="product-title">{product.title}</h4>
      <h2 className='product-price'>{product.price}</h2>
    </div>
  );
};


