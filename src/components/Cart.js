import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false); // State cho hiển thị modal xác nhận
  const product = location.state?.product; // Optional chaining

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 10)); // Limit quantity to 10
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1)); // Prevent negative quantity
  };

  const handleRemoveFromCart = () => {
    setShowConfirmation(true); // Hiển thị modal xác nhận khi bấm nút "Xóa khỏi giỏ hàng"
  };

  const confirmRemoveFromCart = () => {
    // Xử lý logic xóa sản phẩm khỏi giỏ hàng ở đây
    console.log('Product removed from cart');
    setShowConfirmation(false); // Ẩn modal xác nhận sau khi xóa
  };

  const cancelRemoveFromCart = () => {
    setShowConfirmation(false); // Ẩn modal xác nhận nếu người dùng chọn "Hủy"
  };

  if (!product) {
    return (
      <div style={styles.container}>
        <h2>Giỏ hàng của bạn</h2>
        <p>Không có sản phẩm nào trong giỏ hàng.</p>
      </div>
    );
  }

  // Calculate total price with proper formatting (assuming currency)
  const totalPrice = (product.price * quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  return (
    <div style={styles.container}>
      <h2>Giỏ hàng của bạn</h2>
      <div style={styles.productContainer}>
        <div style={styles.productImage}>
          <img src={product.image} alt={product.name} style={{ maxWidth: '200px', borderRadius:"20px" }} />
        </div>
        <div style={styles.productDetails}>
          <div style={styles.productName}>{product.name}</div>
          <div style={styles.productPrice}>{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
          <div style={styles.productQuantity}>
            <label htmlFor="quantity">Số lượng: </label>
            <div style={styles.quantityControls}>
              <button onClick={handleDecreaseQuantity}>-</button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(parseInt(e.target.value, 10), 1))}
                min={1}
                max={10}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', margin: '0 10px' }}
              />
              <button onClick={handleIncreaseQuantity}>+</button>
            </div>
          </div>
          <button style={styles.removeButton} onClick={handleRemoveFromCart}>Xóa khỏi giỏ hàng</button>
        </div>
      </div>
      <div style={styles.totalPriceContainer}>
        <h3 style={styles.totalPrice}>Tổng tiền: {totalPrice}</h3>
        <button style={styles.checkoutButton}>Thanh toán</button>
      </div>
      {/* Modal xác nhận */}
      {showConfirmation && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <p>Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?</p>
            <div>
              <button style={styles.confirmButton} onClick={confirmRemoveFromCart}>Xóa</button>
              <button style={styles.cancelButton} onClick={cancelRemoveFromCart}>Hủy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

const styles = {
  // Các style khác ở đây

  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center'
  },
  confirmButton: {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px'
  },
  cancelButton: {
    backgroundColor: '#ccc',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};
