import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate(); // Sử dụng useNavigate thay vì useHistory

  const [category, setCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [cartItem, setCartItem] = useState(null);

  const handleBuyNow = (product) => {
    // Logic khi click vào nút Mua Ngay
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      navigate('/cart', { state: { product } }); // Sử dụng navigate
    }, 2000);
  };

  const handleAddToCart = (product) => { // Thêm tham số product
    setCartItem(product);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      navigate('/cart', { state: { product } }); // Sử dụng navigate
    }, 2000);
  };

  const products = [
    { id: 1, category: 'A', name: 'Sản phẩm 1', price: '100.000 VNĐ', description: 'Mô tả sản phẩm 1', image: `${process.env.PUBLIC_URL}/images/sanpham.jpeg` },
    { id: 2, category: 'B', name: 'Sản phẩm 2', price: '150.000 VNĐ', description: 'Mô tả sản phẩm 2', image: `${process.env.PUBLIC_URL}/images/sanpham.jpeg` },
    { id: 3, category: 'A', name: 'Sản phẩm 3', price: '200.000 VNĐ', description: 'Mô tả sản phẩm 3', image: `${process.env.PUBLIC_URL}/images/sanpham.jpeg` },
    { id: 4, category: 'B', name: 'Sản phẩm 4', price: '180.000 VNĐ', description: 'Mô tả sản phẩm 4', image: `${process.env.PUBLIC_URL}/images/sanpham.jpeg` },
    { id: 5, category: 'A', name: 'Sản phẩm 5', price: '120.000 VNĐ', description: 'Mô tả sản phẩm 5', image: `${process.env.PUBLIC_URL}/images/sanpham.jpeg` },
    { id: 6, category: 'B', name: 'Sản phẩm 6', price: '160.000 VNĐ', description: 'Mô tả sản phẩm 6', image: `${process.env.PUBLIC_URL}/images/sanpham.jpeg` },
  ];

  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

  const handleChangeCategory = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  };

  const handleProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Tất cả sản phẩm</h2>
        <div style={styles.filterContainer}>
          <label style={styles.filterLabel}>Lọc theo danh mục:</label>
          <select
            value={category}
            onChange={handleChangeCategory}
            style={styles.filterSelect}
          >
            <option value="all">Tất cả</option>
            <option value="A">Danh mục A</option>
            <option value="B">Danh mục B</option>
          </select>
        </div>
      </div>
      <div style={styles.productGrid}>
        {filteredProducts.map(product => (
          <div key={product.id} style={styles.productCard}>
            <div style={styles.productImageContainer}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <button onClick={() => handleProductDetail(product)} style={styles.quickViewButton}>Quick View</button>
            </div>
            <div style={styles.productInfo}>
              <h3 style={styles.productTitle}>{product.name}</h3>
              <p style={styles.productPrice}>Giá: {product.price}</p>
              <a href="#" onClick={() => handleProductDetail(product)} style={styles.detailLink}>Xem chi tiết sản phẩm</a>
              <div style={styles.buttonContainer}>
                <button style={styles.productButton} onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
                <button style={styles.buyNowButton}>Mua ngay</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedProduct && (
        <div style={styles.productDetailOverlay}>
          <div style={styles.productDetail}>
            <span style={{ ...styles.closeButton, ...styles.closeButtonTopRight }} onClick={handleCloseDetail}>&times;</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h2>{selectedProduct.name}</h2>
                                <p>Giá: {selectedProduct.price}</p>

                <p>{selectedProduct.description}</p>
                
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px' }} />
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button style={{ ...styles.productButton, ...styles.addToCartButton }} onClick={() => handleAddToCart(selectedProduct)}>Thêm vào Giỏ hàng</button>
              <button style={styles.buyNowButton} onClick={handleBuyNow}>Mua Ngay</button>
            </div>
          </div>
        </div>
      )}

      {showNotification && cartItem && (
        <div style={styles.notification}>
          <p style={styles.notificationText}>Đã thêm {cartItem.name} vào giỏ hàng</p>
        </div>
      )}
    </div>
  );
}


const styles = {
  notification: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px',
    borderRadius: '20px',
    zIndex: '1000',
  },
  notificationText: {
    margin: '0',
  },

  container: {
    maxWidth: '80%',
    margin: '0 auto',
    marginTop: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2rem',
    color: '#326e51',
    textAlign: 'left',
  },
  filterContainer: {
    textAlign: 'right',
  },
  filterLabel: {
    marginRight: '15px',
  },
  filterSelect: {
    padding: '8px 12px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    transition: 'transform 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  productImageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
  },
  quickViewButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.8rem',
    cursor: 'pointer',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  },
  productInfo: {
    padding: '10px',
  },
  productTitle: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '10px',
  },
  productPrice: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '10px',
  },
  detailLink: {
    color: '#326e51',
    textDecoration: 'none',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  productButton: {
    backgroundColor: '#CD950C',
    color: '#000',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.65rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  buyNowButton: {
    backgroundColor: '#CD3333',
    color: '#000',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.65rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  productDetailOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDetail: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '80%',
    overflow: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },

  productDetailOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDetail: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto',
  },


  closeButton: {
    //top: '10px',
    //right: '10px',
    //cursor: 'pointer',
    fontSize: '20px',
    //color: '#333',
  },
  closeButtonTopRight: {
    //top: '0',
    //right: '0',
  },
};

export default ProductList;

