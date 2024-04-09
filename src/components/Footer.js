import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.footerText}>© 2024 Cửa Hàng Mỹ Phẩm Hasaki.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#326e51',
    color: '#fff',
    padding: '20px 0',
    marginTop: 'auto', // Chuyển footer xuống cuối trang
    
  },
  container: {
    maxWidth: '80%',
    margin: '0 auto',
  },
  footerText: {
    textAlign: 'center',
    fontSize: '0.9rem',
  },
};

export default Footer;
