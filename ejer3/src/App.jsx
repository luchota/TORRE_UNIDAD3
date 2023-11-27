import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import productImage from './assets/file.jpg';

const ProductDetail = ({ handleCompraClick }) => {
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
      <button className="buy-button" onClick={handleCompraClick}>Comprar</button>
    </div>
  );
};

ProductDetail.propTypes = {
  handleCompraClick: PropTypes.func.isRequired,
};

function App() {
  const [mensajeCompra, setMensajeCompra] = useState('');

  const handleCompraClick = () => {
    setMensajeCompra('Gracias por su compra, nos pondremos en contacto con usted!');
  };

  return (
    <div className="app">
      <ProductDetail handleCompraClick={handleCompraClick} />
      <div className="buy-message-container">
        <div className="buy-message">{mensajeCompra}</div>
      </div>
    </div>
  );
}

export default App;
