// Bắt buộc phải có dòng này ở Next.js App Router khi file có sử dụng "useState", "useEffect" hoặc các sự kiện click (tương tác phía người dùng)
"use client"; 

// Import công cụ tối ưu hình ảnh độc quyền của Next.js (tự động nén ảnh, load nhanh hơn)
import Image from "next/image";

// Import công cụ tạo đường dẫn siêu tốc của Next.js (không làm tải lại trang)
import Link from "next/link"; 

// Import các Hook (công cụ) mặc định của React
import { useState, useEffect } from 'react'; 

// Import CSS module để làm đẹp giao diện
import styles from './page.module.css';

// Import các component dùng chung đã được cắt nhỏ (Header, Footer)
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

export default function Home() {
  // --- PHẦN 1: KHAI BÁO BIẾN VÀ DỮ LIỆU (LOGIC) ---

  // useState dùng để nhớ xem người dùng đang click vào tab nào. Mặc định mới vào là "Tất cả"
  const [activeTab, setActiveTab] = useState('Tất cả');
  
  // Lưu tên shop vào một biến, sau này muốn đổi tên shop chỉ cần sửa 1 chỗ này là xong
  const shopName = "X.shop"; 
  // useEffect này sẽ tự động chạy 1 lần duy nhất khi web vừa load xong.
  // Nhiệm vụ: Đổi tiêu đề trên tab của trình duyệt
  useEffect(() => {
    document.title = `${shopName} - Mô Hình & Games Chính Hãng`;
  }, []); // Dấu [] rỗng nghĩa là chỉ chạy 1 lần lúc mới mở web
  // Danh sách các danh mục để tạo nút bấm (Tabs)
  const categories = ["Tất cả", "Mô Hình", "Console", "Games"];
  // Kho dữ liệu mô phỏng (Mock data) chứa danh sách sản phẩm
  const products = [
    { id: 1, name: "RX78-02 GUNDAM", price: "500.000đ", image: "/pgu-rx-78-2-1_b3986c47a87746f8a5578a9492992928_master (1).jpg", category: "Mô Hình" },
    { id: 2, name: "TURN-A GUNDAM", price: "300.000đ", image: "/Untitleddesign-2024-02-13T090517.127.webp", category: "Mô Hình" },
    { id: 3, name: "UNICORN GUNDAM perfectibility", price: "1.250.000đ", image: "/unicorn-gundam.jpg.jpg", category: "Mô Hình", tag: "Hot" },
    { id: 4, name: "Digimon WarGreymon (Amplified)", price: "800.000đ", image: "/war.jpg", category: "Mô Hình" },
    { id: 9, name: "Nintendo Switch Gray Joy-con", price: "6.990.000đ", image: "/gray.webp", category: "Console" },
    { id: 10, name: "Nintendo Switch Lite Yellow", price: "4.680.000đ", image: "/lite.webp", category: "Console" },
    { id: 11, name: "Digimon Story Cyber Sleuth", price: "990.000đ", image: "/digigame.jpg", category: "Games" },
    { id: 12, name: "Pokemon Legends Z-A", price: "1.380.000đ", image: "/pokegame.jpg", category: "Games" }
  ];
  
  // Logic bộ lọc: Nếu activeTab đang là "Tất cả" thì lấy nguyên mảng products.
  // Ngược lại, dùng hàm .filter() để giữ lại những món có category trùng với tab đang chọn.
  const filteredProducts = activeTab === 'Tất cả' 
    ? products 
    : products.filter(p => p.category === activeTab);


  // --- PHẦN 2: HIỂN THỊ GIAO DIỆN (UI) ---
  return (
    <div className={styles.container}>
      {/* Gọi Component Header hiển thị thanh điều hướng trên cùng */}
      <Header />

      <main className={styles.mainContent}>
        
        {/* KHỐI 1: BANNER QUẢNG CÁO */}
        <section className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={styles.bannerText}>
              <span className={styles.promoLabel}>Chào mừng tới {shopName}</span>
              <h1>ƯU ĐÃI THÁNG 3</h1>
              <p>Sưu tầm ngay mô hình cực chất tại <strong>{shopName}</strong> với giá hời nhất</p>
              <button className={styles.btnAction}>Xem chi tiết</button>
            </div>
            <div className={styles.bannerImage}>
              <div className={styles.abstractBox}>🤖</div>
            </div>
          </div>
        </section>

        {/* KHỐI 2: THANH CHUYỂN TAB DANH MỤC */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Sản phẩm mới nhất tại {shopName}</h2>
          <div className={styles.filterTabs}>
            {/* Lấy mảng categories duyệt qua để in ra các nút bấm */}
            {categories.map((cat) => (
              <button 
                key={cat} 
                // Nếu tên tab trùng với biến activeTab thì thêm class activeTab cho nó sáng lên
                className={`${styles.tabBtn} ${activeTab === cat ? styles.activeTab : ''}`}
                // Bắt sự kiện click: Cập nhật biến activeTab thành tên tab vừa bấm
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* KHỐI 3: DANH SÁCH SẢN PHẨM */}
        <div className={styles.productGrid}>
          {/* Lấy mảng đã được lọc (filteredProducts) chạy vòng lặp map để in ra từng sản phẩm */}
          {filteredProducts.map((item) => (
            
            // Thẻ Link nằm BÊN TRONG vòng lặp map để bọc lấy từng sản phẩm.
            <Link 
              href={`/chitietsanpham/${item.id}`} 
              key={item.id} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {/* Đây là bộ khung (Card) của 1 sản phẩm */}
              <div className={styles.productCard}>
                
                {/* Phần 1: Hình ảnh */}
                <div className={styles.imageWrapper}>
                  {/* Nếu sản phẩm có tag (VD: Hot, New) thì mới in thẻ span này ra */}
                  {item.tag && <span className={styles.badge}>{item.tag}</span>}
                  
                  {/* Đã thay <img> thành <Image> của Next.js để hết báo vàng */}
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    className={styles.productImg}
                    width={300} // Bắt buộc phải cấp chiều rộng cho Next Image
                    height={300} // Bắt buộc phải cấp chiều cao cho Next Image
                    // Không cần gõ loading="lazy" nữa vì Next Image đã tự động làm việc đó
                  />
                </div>

                {/* Phần 2: Thông tin (Tên, phân loại, giá) */}
                <div className={styles.productInfo}>
                  <span className={styles.categoryLabel}>{item.category}</span>
                  <h3 title={item.name}>{item.name}</h3>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>{item.price}</span>
                    <button className={styles.btnAdd}>+ Thêm</button>
                  </div>
                </div>

              </div>
            </Link>

          ))}
        </div>
      </main>

      {/* Gọi Component Footer hiển thị thông tin chân trang */}
      <Footer />
    </div>
  );
}