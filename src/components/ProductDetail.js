import React from 'react';

const ProductDetail = ({ product, onClose }) => {
  return (
    <div style={styles.container}>
      <button style={styles.closeButton} onClick={onClose}>Đóng</button>
      <div style={styles.productDetail}>
        <div style={styles.imageContainer}>
          <img src={product.image} alt={product.name} style={styles.productImage} />
        </div>
        <div style={styles.details}>
          <h2 style={styles.productName}>{product.name}</h2>
          <p style={styles.productPrice}>Giá: {product.price}</p>
          <p style={styles.productDescription}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '999',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.8rem',
    cursor: 'pointer',
  },
  productDetail: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '80%',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    flex: '1',
    marginRight: '20px',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  details: {
    flex: '2',
  },
  productName: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  productPrice: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '10px',
  },
  productDescription: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default ProductDetail;
