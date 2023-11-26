import React from 'react';
import './App.css';
import productImage from './assets/file.jpg';


const ProductDetail = () => {
  const product = {
    nombre: 'Producto de Ejemplo',
    descripcion: 'Vaporesso Luxe PM-40.',
    precio: '$9.99',
    sku: 'ABC789',
    cantidadDisponible: 12,
  };

  return (
    <div className="product-detail">
      <h2>{product.nombre}</h2>
      <img src={productImage} alt="Producto" className="product-image" />
      <p><strong>Descripción:</strong> {product.descripcion}</p>
      <p><strong>Precio:</strong> {product.precio}</p>
      <p><strong>SKU:</strong> {product.sku}</p>
      <p><strong>Cantidad Disponible:</strong> {product.cantidadDisponible}</p>
    </div>
  );
};


function App() {
  return (
    <div className="app">
      <ProductDetail />
    </div>
  );
}


export default App;
