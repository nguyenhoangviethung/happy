# Thiệp Online 3D Vintage - Envelope & Love Letter

Một mẫu thiệp trực tuyến tương tác 3D mô phỏng phong thư phong cách cổ điển sang trọng (Vintage Wax Seal Letter) với hiệu ứng con dấu sáp, lá thư trượt mở mượt mà, pháo hoa giấy confetti, chim bồ câu origami, mây trôi và nhạc nền lãng mạn.

Đi kèm **2 nút bấm tương tác đặc biệt**:
1. 🎁 **Chọn món quà**: Chạm mở hộp quà bí mật, bắn pháo hoa kèm ảnh và lời nhắn ngọt ngào.
2. 📅 **Chọn lịch đi chơi & Nút troll "Không đi"**:
   - Chọn ngày giờ và hoạt động đi chơi.
   - Nút troll *"Không đi"* né chuột/ngón tay, đổi câu troll hài hước, phóng to nút Đồng ý.
   - **Đếm chính xác số lần cô ấy bấm nút troll**, hiển thị thống kê khi chốt kèo và hỗ trợ gửi thông báo tức thì về điện thoại!

---

## 🚀 Hướng Dẫn Chạy Trên GitHub Pages

1. **Tải toàn bộ thư mục lên GitHub repository**:
   - `index.html`
   - `config.yaml`
   - `config.js`
   - `music.mp3`
2. **Bật GitHub Pages**:
   - Vào mục **Settings** của repository -> Chọn **Pages** (ở menu bên trái).
   - Tại mục **Build and deployment** -> **Branch**: Chọn `main` (hoặc `master`), thư mục `/ (root)`.
   - Bấm **Save**.
3. Chờ khoảng 1-2 phút, bạn sẽ có link trực tiếp dạng: `https://<ten-user>.github.io/<ten-repo>/`.

---

## 🎨 Tùy Chỉnh Toàn Diện Trong `config.yaml`

Bạn chỉ cần mở file [`config.yaml`](file:///home/bear/Documents/Workspace/Thiep/config.yaml) để chỉnh sửa:

```yaml
# 1. Tiêu đề thiệp (hiển thị đầu thư và tab trình duyệt)
title: "Anh iu em"

# 2. false: Hiện chữ tiêu đề | true: Hiện hoa văn trái tim xoay vintage
hide_title: false

# 3. Chọn màu sắc chủ đề (1 đến 10)
theme: 1

# 4. File nhạc nền
music: "./music.mp3"

# 5. Nội dung bức thư
messages:
  - "Gửi em yêu thương,"
  - "Anh sẽ đón em vào một ngày không xa..."
  - "Chúc em luôn vui vẻ, xinh đẹp và hạnh phúc mỗi ngày! ❤️✨"
  - "Yêu em rất nhiều!"

# 6. Cấu hình món quà
gift:
  button_text: "🎁 Mở Quà Của Em"
  title: "Món Quà Dành Riêng Cho Em"
  image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop"
  message: "Một món quà nhỏ cùng tất cả sự yêu thương dành riêng cho em. Mong nụ cười này sẽ luôn ở trên môi em nhé! ❤️"

# 7. Cấu hình rủ đi chơi & nút troll (Đơn giản, chỉ cần hỏi Có đi hay không)
date_plan:
  button_text: "Đi chơi hong"
  title: "Đi chơi với anh nhé? 🥰"
  subtitle: "Anh đón em đi dạo phố và ăn những món em thích nha! ❤️"
  agree_button_text: "Đi lun chứ! 🥰"
  refuse_button_text: "Không đi 😜"

# 8. Cấu hình thông báo về Zalo & Điện thoại
notification:
  # Cách 1: Zalo (Người ấy chốt kèo sẽ tự copy tin nhắn kèm số lần troll và mở Zalo gửi cho bạn)
  zalo_phone: "0912345678"

  # Cách 2: Báo tin ngầm tự động 100% qua Telegram Bot (Hoàn toàn miễn phí, cô ấy không biết)
  telegram_bot_token: ""
  telegram_chat_id: ""

  # Cách 3: Webhook tùy chọn (Google Sheet / Make.com / Discord)
  webhook_url: ""
```

---

---

## 🕵️ Cách Hoạt Động & Nhận Thông Báo Số Lần Bấm Troll

Trên nền tảng GitHub Pages (HTML tĩnh), hệ thống hỗ trợ giải pháp bảo mật và tối ưu nhất:

### 🛡️ Cách 1: Báo tin ngầm tự động 100% qua Cloudflare Worker (Bảo mật - Khuyên dùng)
- Tạo Cloudflare Worker làm proxy trung gian để giấu toàn bộ Token Zalo Bot / Telegram / Phone.
- Điền URL Worker vào `notification.api_url` trong `config.yaml`:
  ```yaml
  notification:
    api_url: "https://happy.nguyenhoangviethung.workers.dev"
  ```
- **Ưu điểm**:
  - Không lộ bất kỳ Token hay Chat ID nào trên GitHub Pages (an toàn kể cả với Public Repository).
  - Mỗi lần cô ấy bấm *"Không đi"*, hệ thống gửi tin ngầm về Zalo:
    `"🚨 [THIỆP ONLINE]: Người ấy vừa bấm nút 'Không đi' lần thứ 3! 😜"`
  - Khi cô ấy bấm *"Đi lun chứ!"* hoặc bấm nút báo Zalo:
    `"🎉 [THIỆP ONLINE]: CHỐT KÈO THÀNH CÔNG! Số lần bấm 'Không đi' trước đó: 5 lần ❤️"`

### 🔔 Cách 2: Báo tin qua Telegram Bot hoặc Webhook tùy chọn
- Điền `telegram_bot_token` và `telegram_chat_id` hoặc `webhook_url` vào `config.yaml` nếu bạn muốn gửi thêm thông báo qua các kênh khác.

