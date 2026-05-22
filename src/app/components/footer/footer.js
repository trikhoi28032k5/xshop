import styles from "./footer.module.css";

export function Footer() {
  const shopName = "X.shop"; // Thiết lập tên shop đồng bộ với page.js

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Cột Thương hiệu */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerLogo}>
            {shopName.split(' ')[0]}<span>{shopName.split(' ')[1]}</span>
          </h3>
          <p className={styles.description}>
            Hệ thống cung cấp Mô Hình & Games chính hãng, uy tín và tốc độ hàng đầu.
          </p>
          <div className={styles.contactInfo}>
            <p><span>📍</span> 123 Đường ABCXYZ, Quận 01, TP. Hồ Chí Minh</p>
            <p><span>📞</span> Hotline: 1900 00XX</p>
            <p><span>✉️</span> support@Xshop.vn</p>
          </div>
        </div>

        {/* Cột Liên kết */}
        <div className={styles.footerColumn}>
          <h4>Về {shopName}</h4>
          <ul className={styles.links}>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Tuyển dụng</a></li>
            <li><a href="#">Tin tức</a></li>
            <li><a href="#">Nhượng quyền</a></li>
          </ul>
        </div>

        {/* Cột Chính sách */}
        <div className={styles.footerColumn}>
          <h4>Chính sách</h4>
          <ul className={styles.links}>
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Quy định khiếu nại</a></li>
            <li><a href="#">Điều khoản sử dụng</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        {/* Cột Đăng ký */}
        <div className={styles.footerColumn}>
          <h4>Đăng ký nhận ưu đãi</h4>
          <div className={styles.subscribeBox}>
            <input type="email" placeholder="Email của bạn..." />
            <button>Gửi</button>
          </div>
          <div className={styles.socialSection}>
            <p>Theo dõi chúng tôi tại:</p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.fb}>Facebook</a>
              <a href="#" className={styles.yt}>Youtube</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 <strong>{shopName}</strong>. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
}