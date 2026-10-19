# Thiệp Online 3D Vintage - Envelope & Love Letter

Một mẫu thiệp trực tuyến tương tác 3D mô phỏng phong thư phong cách cổ điển sang trọng (Vintage Wax Seal Letter) với hiệu ứng con dấu sáp, lá thư trượt mở mượt mà, pháo hoa giấy confetti, chim bồ câu origami, mây trôi và nhạc nền lãng mạn.

Thiết kế tối ưu chạy ngay trên **GitHub Pages**, trình duyệt máy tính, điện thoại di động (iOS/Android) mà không cần backend hay database.

---

## 🚀 Hướng Dẫn Chạy Trên GitHub Pages

1. **Tạo repository mới** trên GitHub (ví dụ: `thiep-yeu-thuong`).
2. **Tải 2 file lên repository**:
   - `index.html`
   - `music.mp3`
3. **Bật GitHub Pages**:
   - Vào mục **Settings** của repository -> Chọn **Pages** (ở menu bên trái).
   - Tại mục **Build and deployment** -> **Branch**: Chọn `main` (hoặc `master`), thư mục `/ (root)`.
   - Bấm **Save**.
4. Chờ khoảng 1-2 phút, bạn sẽ nhận được đường link trực tiếp (ví dụ: `https://<ten-user>.github.io/thiep-yeu-thuong/`) để gửi cho người thương!

---

## 🎨 Tùy Chỉnh Nội Dung Trong `config.js`

Bạn **chỉ cần mở file `config.js`** và chỉnh sửa các dòng sau:

```javascript
window.CONFIG = {
    // 1. Tiêu đề thiệp
    title: "Anh iu em",

    // 2. Chế độ hiển thị tiêu đề:
    // - false: Hiện chữ tiêu đề (Ví dụ: "ANH IU EM")
    // - true:  Ẩn chữ, thay bằng hoa văn dây leo trái tim xoay tròn cổ điển
    hide_title: false,

    // 3. Nội dung bức thư (Có thể viết nhiều đoạn, xuống dòng, chèn emoji):
    messages: [
        "Gửi em yêu thương,",
        "Anh sẽ đón em vào một ngày không xa...",
        "Cảm ơn em vì đã luôn ở bên cạnh anh, mang đến cho anh những nụ cười rạng rỡ và những khoảnh khắc ấm áp nhất.",
        "Chúc em luôn vui vẻ, xinh đẹp và hạnh phúc mỗi ngày! ❤️✨",
        "Yêu em rất nhiều!"
    ],

    // 4. Chọn màu sắc chủ đề (Từ 1 đến 10)
    theme: 1,

    // 5. Tên file nhạc bạn tải về đặt cùng thư mục (ví dụ: ./music.mp3)
    music: "./music.mp3"
};
```

### 10 Bộ Chủ Đề Màu Sắc Có Sẵn:
1. **Theme 1 - Hồng Ngọt Ngào**: Tình yêu, Valentine, 20/10, 8/3.
2. **Theme 2 - Đỏ Nồng Nàn**: Kỷ niệm tình yêu, ngày cưới, may mắn.
3. **Theme 3 - Xanh Biển Hy Vọng**: Thanh mát, bạn bè, tri kỷ.
4. **Theme 4 - Xanh Mint Tươi Mới**: Sinh nhật, tuổi trẻ, năng động.
5. **Theme 5 - Vàng Nắng Ấm Áp**: Biết ơn, tri ân, 20/11.
6. **Theme 6 - Tím Oải Hương**: Lãng mạn, chung thủy, mộng mơ.
7. **Theme 7 - Cam Đào Sum Vầy**: Ấm cúng, gia đình.
8. **Theme 8 - Xanh Matcha An Yên**: Bình an, nhẹ nhàng, sức khỏe.
9. **Theme 9 - Xanh Sapphire Quý Phái**: Sang trọng, thành công, đối tác.
10. **Theme 10 - Trắng Sữa Vàng Kem**: Tinh khôi, hoài niệm vintage cổ điển.

---

## 💡 Các Tính Năng Nổi Bật

- **Bao thư 3D với con dấu sáp (Wax Seal)**: Chạm nhẹ vào con dấu để bẻ sáp, nắp thư mở theo không gian 3D, kèm âm thanh pop & chimes cùng pháo hoa confetti bay tung tóe.
- **Lá thư cuộn mượt mà**: Tự động đo kích cỡ chữ (Typography thông minh), thanh tiến trình đọc ở mép thư, nút gợi ý cuộn xuống và nút đóng thư về bao thư ban đầu.
- **Nhạc nền & Điều khiển**: Nút bật/tắt nhạc với biểu tượng sóng âm thanh chuyển động, nút bật/tắt toàn màn hình (Fullscreen).
- **Họa tiết sinh động**: Đàn chim origami đập cánh bay lượn trên bầu trời, các tầng mây bồng bềnh và hạt bụi sao lấp lánh (Canvas Ambient).
- **100% Thuần Web (HTML5/CSS3/JS)**: Không phụ thuộc máy chủ, hỗ trợ cả `file:///` lẫn HTTPS.

