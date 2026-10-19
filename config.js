/**
 * =========================================================================
 * 💌 BẢNG CẤU HÌNH THIỆP (CARD CONFIGURATION)
 * =========================================================================
 * Bạn chỉ cần chỉnh sửa các thông tin bên dưới để thay đổi nội dung,
 * tiêu đề, màu sắc chủ đề và nhạc nền của thiệp mà không cần động vào file HTML!
 */

window.CONFIG = {
    // 1. Tiêu đề lá thư
    title: "Anh iu em",

    // 2. Chế độ hiển thị tiêu đề:
    // - false: Hiển thị dòng chữ tiêu đề (Ví dụ: "ANH IU EM")
    // - true:  Ẩn chữ tiêu đề, thay bằng biểu tượng hoa văn dây leo trái tim xoay tròn cổ điển
    hide_title: false,

    // 3. Nội dung bức thư (Có thể viết nhiều đoạn, xuống dòng thoải mái, hỗ trợ emoji):
    messages: [
        "Gửi em yêu thương,",
        "Anh sẽ đón em vào một ngày không xa...",
        "Cảm ơn em vì đã luôn ở bên cạnh anh, mang đến cho anh những nụ cười rạng rỡ và những khoảnh khắc ấm áp nhất.",
        "Chúc em luôn vui vẻ, xinh đẹp và hạnh phúc mỗi ngày! ❤️✨",
        "Yêu em rất nhiều!"
    ],

    // 4. Chủ đề màu sắc giao diện (Chọn từ 1 đến 10):
    // -------------------------------------------------------------
    //  1: Hồng ngọt ngào (Tình yêu, Valentine, 20-10, 8-3)
    //  2: Đỏ nồng nàn    (Kỷ niệm, Lễ cưới, Lãng mạn)
    //  3: Xanh biển      (Hy vọng, Tự do, Bình yên)
    //  4: Xanh mint      (Tươi mát, Tuổi trẻ, Sinh nhật)
    //  5: Vàng nắng      (Tri ân, Nắng mai, Ấm áp)
    //  6: Tím oải hương  (Mộng mơ, Thủy chung)
    //  7: Cam đào        (Sum vầy, Ngọt ngào, Gần gũi)
    //  8: Xanh matcha    (An yên, Nhẹ nhàng, Sức khỏe)
    //  9: Xanh sapphire  (Quý phái, Sang trọng, Thành công)
    // 10: Trắng kem      (Vintage hoài niệm, Tinh khôi)
    theme: 1,

    // 5. File nhạc nền (Mặc định dùng bài hát trong thư mục: ./music.mp3)
    music: "./music.mp3"
};

// Đồng bộ tự động vào bộ xử lý thiệp
window.dataLetterV14 = {
    template: "letter-v14",
    data: {
        title: window.CONFIG.title,
        hide_title: window.CONFIG.hide_title,
        messages: Array.isArray(window.CONFIG.messages) 
            ? window.CONFIG.messages.join('\n\n') 
            : window.CONFIG.messages,
        theme: window.CONFIG.theme,
        fonts: {
            content: {
                messages: "Noto Sans"
            }
        },
        type_music: "system",
        backgroundMusic: window.CONFIG.music
    }
};

// Cập nhật tiêu đề tab trình duyệt
if (window.CONFIG.title) {
    document.title = window.CONFIG.title;
}

