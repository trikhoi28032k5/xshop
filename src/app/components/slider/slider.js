"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from '../../chitietsanpham/[id]/product.module.css';

export default function ProductSlider({ images = [], productName = "Sản phẩm", discount = "" }) {
  // Sửa lỗi: Sử dụng images[0] || "" để tránh lỗi khi mảng rỗng hoặc undefined
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  // Cập nhật lại ảnh chính khi người dùng chuyển sang xem sản phẩm khác
  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className={styles.imageGallery}>
      <div className={styles.mainImage}>
        {discount && <span className={styles.badge}>{discount}</span>}
        <button className={styles.navButton} style={{ left: '10px' }} onClick={handlePrev}>❮</button>
        <Image 
          src={selectedImage} 
          alt={productName} 
          width={500} 
          height={500} 
          priority 
          style={{ objectFit: 'contain' }} 
        />
        <button className={styles.navButton} style={{ right: '10px' }} onClick={handleNext}>❯</button>
      </div>
      <div className={styles.thumbnailList}>
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`${styles.thumbnail} ${selectedImage === img ? styles.activeThumbnail : ''}`}
            onClick={() => setSelectedImage(img)}
          >
            <Image src={img} alt="thumb" width={100} height={100} style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

