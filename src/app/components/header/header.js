// Sửa 1: Đường dẫn import CSS (chỉ cần ./)
import styles from "./header.module.css";

// Sửa 2: Đem mảng menuItems từ page.js sang đây vì Header là nơi sử dụng nó
const menuItems = [
  { name: "Trang chủ", icon: "🏠" },
  { name: "Về X.shop", icon: "🏪" },
  { 
    name: "Bảng giá", 
    icon: "🪙", 
    subMenu: ["Cước bưu phẩm", "Cước hàng hóa", "Vận chuyển quốc tế"] 
  },
  { 
    name: "Hỗ trợ", 
    icon: "☎️", 
    subMenu: ["Trung tâm trợ giúp", "Liên hệ hot-line"] 
  },
  { name: "Nhượng quyền", icon: "🤝" },
  { name: "Tin tức", icon: "📰" },
  { name: "API", icon: "⚙️" },
  { name: "Tải ứng dụng", icon: "⏬" },
];

// Sửa 3: Viết hoa chữ cái đầu của Component (Header)
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>X</div>
          <span className={styles.brandName}>X.shop</span>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Tra cứu mã vận đơn..." />
          <button className={styles.searchBtn}>Tìm kiếm</button>
        </div>
        <div className={styles.authButtons}>
          <button className={styles.btnLogin}>Đăng nhập</button>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.navListItem}>
              <div className={styles.navLink}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.name}>{item.name} {item.subMenu && "▾"}</span>
              </div>
              {/* Menu con đổ xuống */}
              {item.subMenu && (
                <ul className={styles.subMenu}>
                  {item.subMenu.map((sub, i) => (
                    <li key={i} className={styles.subItem}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
