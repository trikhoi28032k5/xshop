"use client";

import { useState } from 'react';
import { useParams } from "next/navigation";
import styles from './product.module.css';
import { Header } from '../../components/header/header';
import { Footer } from '@/app/components/footer/footer';
import ProductSlider from '../../components/slider/slider'; 

export default function ProductDetail() {
  const params = useParams();
  const currentId = params.id; 

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');

  const products = [
    { 
      id: 1, name: "RX78-02 GUNDAM", brand: "Bandai", status: "Còn hàng",
      newPrice: "500.000đ", oldPrice: "750.000đ", discount: "-32%",
      images: [
        "/pgu-rx-78-2-1_b3986c47a87746f8a5578a9492992928_master (1).jpg", 
        "/RX78NEW.webp", "/rx782origin.webp", "/rx78beam.jpg", "/rx18bazooka.webp"
      ],
      specs: ["Dòng mô hình: HG", "Chất liệu: Nhựa cao cấp", "Xuất xứ: Nhật Bản", "Hãng: Bandai", "Loại: Mô hình lắp ráp"]
    },
    { 
      id: 3, name: "UNICORN GUNDAM perfectibility", brand: "Bandai", status: "Còn hàng",
      newPrice: "1.250.000đ", oldPrice: "1.500.000đ", discount: "-15%",
      images: [
        "/unicorn-gundam.jpg.jpg", "/bu.webp", "/unimode.png", "/uniclaw.jpg", "/e966f0ef343e757a19f74adc95af2dbd.jpeg_960x960q80.jpg_.webp",
      ],
      specs: ["Dòng mô hình: MG", "Tỷ lệ: 1/100", "Đặc điểm: Dạ quang UV", "Chất liệu: Nhựa cao cấp", "Hãng: Bandai"]
    }
  ];

  const product = products.find((p) => p.id.toString() === currentId);

  if (!product) {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.mainContainer} style={{textAlign: 'center', padding: '100px'}}>
           <h2>Sản phẩm hiện không có trong kho</h2>
        </div>
        <Footer />
      </div>
    );
  }

  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
  const handleIncrease = () => setQuantity(quantity + 1);

  return (
    <div className={styles.wrapper} style={{ backgroundColor: '#f4f4f4', paddingBottom: '50px' }}>
      <Header />
      
      <main className={styles.mainContainer}>
        <div className={styles.productTop}>
          {/* Cột trái: Gallery ảnh - Khớp với class .imageGallery */}
          <div className={styles.imageGallery}>
            <ProductSlider 
              images={product.images} 
              productName={product.name} 
              discount={product.discount} 
            />
          </div>

          {/* Cột phải: Thông tin sản phẩm - Khớp với class .productInfo */}
          <div className={styles.productInfo}>
            <h1 className={styles.productName} style={{fontSize: '28px', marginBottom: '10px'}}>{product.name}</h1>
            <p className={styles.productBrand}>
              Thương hiệu: <strong style={{color: '#ee2624'}}>{product.brand}</strong> | Tình trạng: <span>{product.status}</span>
            </p>

            <div className={styles.priceBox}>
              <span className={styles.newPrice}>{product.newPrice}</span>
              <span className={styles.oldPrice}>{product.oldPrice}</span>
              <div style={{color: 'crimson', fontSize: '14px', marginTop: '5px'}}>Tiết kiệm ngay: {product.discount}</div>
            </div>

            <div className={styles.purchaseActions}>
              <div className={styles.quantitySelector}>
                <button onClick={handleDecrease}>-</button>
                <input type="text" value={quantity} readOnly />
                <button onClick={handleIncrease}>+</button>
              </div>
              <button className={styles.btnAddToCart}>THÊM VÀO GIỎ</button>
              <button className={styles.btnBuyNow}>MUA NGAY</button>
            </div>

            {/* Khớp với class .hotlineBox bạn đã viết */}
            <div className={styles.hotlineBox}>
              <p>📞 <strong>Hotline hỗ trợ:</strong> 0123.456.789</p>
              <p style={{fontSize: '13px', color: '#666', marginTop: '5px'}}>Miễn phí giao hàng cho đơn hàng trên 1.000.000đ</p>
            </div>
          </div>
        </div>

        {/* Khu vực Tabs - Khớp với class .tabsContainer và hiệu ứng gạch chân */}
        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'desc' ? styles.activeTab : ''}`} 
            onClick={() => setActiveTab('desc')}
          >
            Mô tả sản phẩm
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'spec' ? styles.activeTab : ''}`} 
            onClick={() => setActiveTab('spec')}
          >
            Thông số kỹ thuật
          </button>
        </div>

        {/* Nội dung Tab - Khớp với class .tabContent và .innerTabContent */}
        <div className={styles.tabContent}>
          <div className={styles.innerTabContent}>
            {activeTab === 'desc' ? (
              <div>
                <h3 className={styles.contentTitle}>Đặc điểm nổi bật của {product.name}</h3>
                <p>Sản phẩm chính hãng từ {product.brand}. Độ chi tiết cực cao, các khớp nối linh hoạt giúp bạn dễ dàng tạo dáng cho mô hình.</p>
                <p style={{marginTop: '10px'}}>Chất liệu nhựa cao cấp ABS an toàn cho người sử dụng.</p>
              </div>
            ) : (
              <table className={styles.specTable}>
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr key={i}>
                      <td>{s.split(':')[0]}</td>
                      <td>{s.split(':')[1] || s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}