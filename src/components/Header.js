import React, { useState, useEffect } from 'react';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header style={isSticky ? { ...styles.header, ...styles.stickyHeader } : styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Hasaki</h1>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="/" style={styles.navLink}>Trang Chủ</a></li>
            <li style={styles.navItem}><a href="/products" style={styles.navLink}>Sản Phẩm</a></li>
            <li style={styles.navItem}><a href="/cart" style={styles.navLink}>Giỏ Hàng</a></li>
            {/* Thêm các liên kết và mục điều hướng khác nếu cần */}
          </ul>
        </nav>
        <div style={styles.rightSection}>
          <div style={styles.searchContainer}>
            <input type="text" placeholder="Tìm kiếm..." style={styles.searchInput} />
          </div>
          
          <div style={styles.dropdown}>
            <button style={styles.dropbtn} onClick={toggleDropdown}>Tài Khoản</button>
            {showDropdown && (
              <div style={styles.dropdownContent} onMouseLeave={closeDropdown}>
                <a href="/" style={styles.dropdownLink}>Đăng Nhập</a>
                <a href="/" style={styles.dropdownLink}>Đăng Ký</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    borderRadius: '35px 35px 0 0', // Bo tròn góc trên bên trái và phải
    backgroundColor: '#326e51',
    color: '#fff',
    padding: '15px 0',
    borderBottom: '1px solid #ddd',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
  stickyHeader: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    margin: 0,
    fontSize: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    textDecoration: 'none',
  },
  nav: {},
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  navItem: {
    marginLeft: '30px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontFamily: 'Arial, sans-serif',
    transition: 'color 0.3s ease',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  searchContainer: {
    position: 'relative',
    marginRight: '20px',
  },
  searchInput: {
    padding: '10px 30px 10px 10px',
    borderRadius: '20px',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.5)',
    color: '#333',
    width: '200px',
    fontSize: '1rem',
    transition: 'width 0.3s ease',
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  },
  cartLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.2rem',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    transition: 'color 0.3s ease',
    marginLeft: '20px',
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: '20px',
  },
  dropbtn: {
    backgroundColor: '#326e51',
    color: '#fff',
    fontSize: '1.2rem',
    fontFamily: 'Arial, sans-serif',
    border: 'none',
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '5px',
  },
  dropdownContent: {
    display: 'block',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '1',
    borderRadius: '5px',
    top: '100%',
  },
  dropdownLink: {
    color: '#00AA00',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
    fontFamily: 'Arial, sans-serif',
    transition: 'background-color 0.3s ease',
    borderBottom: '1px solid #ddd',
  },
  'dropdownLink:hover': { 
    backgroundColor: '#00AA00',
  },
};

export default Header;
