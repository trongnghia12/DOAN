import React, { useState, useEffect } from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <AboutUs />
    </div>
  );
}

const Header = () => {
  return (
    <header style={{ ...styles.header, ...styles.shadow, ...styles.headerLarge }}>
      <div style={styles.container}>
        <h1 style={{ ...styles.title, ...styles.greenText }}>Cửa Hàng Mỹ Phẩm Hasaki</h1>
        <p style={{ ...styles.subtitle, ...styles.greenText }}>Chào mừng đến với Hasaki! Khám phá bộ sưu tập sản phẩm chăm sóc sắc đẹp cao cấp của chúng tôi.</p>
      </div>
      <Slider />
    </header>
  );
}

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Thay đổi slide mỗi 5 giây

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  }

  const images = [`${process.env.PUBLIC_URL}/images/slide1.jpeg`, `${process.env.PUBLIC_URL}/images/slide2.jpeg`, `${process.env.PUBLIC_URL}/images/slide3.jpeg`];

  return (
    <div style={styles.slider}>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} style={styles.slide} />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section style={{ ...styles.heroSection, ...styles.shadow }}>
      <div style={styles.heroContent}>
        <h2 style={{ ...styles.heroTitle, ...styles.greenText }}>Khám Phá Sắc Đẹp Tự Nhiên</h2>
        <p style={styles.heroDescription}>Chúng tôi cam kết mang lại những sản phẩm mỹ phẩm tự nhiên, an toàn và hiệu quả nhất cho bạn.</p>
        <button style={{ ...styles.heroButton, ...styles.buttonHover }}>Tìm Hiểu Thêm</button>
      </div>
    </section>
  );
}
const ProductCard = () => {
  return (
    <div style={styles.productCard}>
      <div style={styles.productImageContainer}>
        <img src={`${process.env.PUBLIC_URL}/images/sanpham.jpeg`} alt="Sản phẩm" style={styles.productImage} />
        <button style={styles.quickViewButton}>Quick View</button>
      </div>
      <div style={styles.productInfo}>
        <h3 style={styles.productTitle}>Tên Sản Phẩm</h3>
        <p style={styles.productPrice}>Giá: 100.000 VNĐ</p>
        <button style={styles.productButton}>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
}

const FeaturedProducts = () => {
  return (
    <section style={styles.featuredProducts}>
      <h2 style={styles.sectionTitle}>Sản Phẩm Nổi Bật</h2>
      <div style={styles.productGrid}>
        {[...Array(4).keys()].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </section>
  );
}

const AboutUs = () => {
  return (
    <section style={styles.aboutUs}>
      <h2 style={{ ...styles.sectionTitle, ...styles.greenText }}>Về Chúng Tôi</h2>
      <p style={styles.aboutDescription}>Chúng tôi luôn nỗ lực mang đến những sản phẩm mỹ phẩm tốt nhất cho khách hàng của chúng tôi. Sản phẩm của chúng tôi được chọn lựa cẩn thận để tăng cường vẻ đẹp tự nhiên của bạn.</p>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: '80%',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '20px',
    position: 'relative',
  },
  headerLarge: {
    width: '96.5%',
    padding: '40px 20px',
  },

  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
  },
  slider: {
    perspective: '1500px',
    position: 'relative',
    overflow: 'hidden',
    margin: '20px 0',
    borderRadius: '10px',
  },
  slide: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    transition: 'transform 1s',
    backfaceVisibility: 'hidden',
  },
  heroSection: {
    background: 'linear-gradient(135deg, #fdfcfb, #e2d1c3)',
    padding: '60px 0',
    textAlign: 'center',
    marginBottom: '40px',
    borderRadius: '10px',
  },
  heroContent: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  heroDescription: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '20px',
  },
  heroButton: {
    backgroundColor: '#326e51',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '20px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },


  featuredProducts: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#326e51',
    marginBottom: '20px',
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
  productButton: {
    backgroundColor: '#326e51',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },


  aboutUs: {
    marginBottom: '40px',
  },
  aboutDescription: {
    fontSize: '1.2rem',
    color: '#666',
  },
  shadow: {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  border: {
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  greenText: {
    color: '#326e51',
  },

  buttonHover: {
    ':hover': {
      backgroundColor: '#4CAF50',
    },
  },
};

export default HomePage;
