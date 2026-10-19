// =========================================================================
// 💌 CẤU HÌNH DỰ PHÒNG CHO THIỆP (CONFIG.JS)
// =========================================================================
// File này dùng làm dự phòng khi bạn mở trực tiếp file index.html trên máy
// mà không qua web server (khi trình duyệt chặn đọc file config.yaml).
// Trên GitHub Pages, hệ thống sẽ ưu tiên đọc trực tiếp từ config.yaml.

window.CONFIG = {
    // 1. Tiêu đề thiệp
    title: "Anh iu em",

    // 2. Ẩn chữ tiêu đề (false: Hiện chữ | true: Hiện hoa văn trái tim xoay)
    hide_title: false,

    // 3. Màu sắc chủ đề (1 đến 10)
    theme: 1,

    // 4. File âm thanh
    music: "./music.mp3",

    // 5. Nội dung bức thư
    messages: [
        "Anh sẽ đón em vào một ngày không xa...",
        "Mỗi ngày nhắn tin với cậu tớ đều thấy rất vui.",
        "Hi vọng thời gian tới tớ sẽ có cơ hội được vui nhiều hơn. ❤️✨ ❤️✨"
    ],

    // 6. Món quà
    gift: {
        button_text: "Gift",
        title: "Món Quà Dành Riêng Cho Em",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
        message: "Một món quà nhỏ cùng tất cả sự yêu thương và chiều chuộng dành riêng cho em. Mong rằng nụ cười rạng rỡ này sẽ luôn nở trên môi em nhé! ❤️"
    },

    // 7. Rủ đi chơi & Nút troll "Không đi"
    date_plan: {
        button_text: "Đi chơi hong",
        title: "Đi chơi với anh nhé? 🥰",
        subtitle: "Anh đón em đi dạo phố và ăn những món em thích nha! ❤️",
        agree_button_text: "Đi lun chứ! 🥰",
        refuse_button_text: "Không đi 😜",

        // Cấu hình nội dung màn hình chốt kèo thành công:
        success_title: "CHỐT KÈO THÀNH CÔNG! 🎉",
        success_subtitle: "Anh biết là em sẽ đồng ý mà! Anh qua đón em liền nha! Hehe ❤️",
        success_troll_prefix: "Bật mí: Em đã bấm nút \"Không đi\" tận {count} lần nhưng cuối cùng vẫn đồng ý nè! ❤️",

        // Cấu hình nút gửi qua Bot Zalo (Bấm là gửi thẳng tin nhắn về Zalo của anh, không cần mở app):
        success_button_text: "💬 Báo cho anh qua Zalo liền nha!",
        success_sent_text: "✅ Đã gửi tới Zalo của anh rùi nè! 🥰",
        success_status_text: "🎉 Ting ting! Tin nhắn đã bay thẳng tới Zalo của anh rùi nha! ❤️ Em chỉ cần chuẩn bị thật xinh rồi chờ anh qua đón nhen! ✨",
        success_bot_message: "Anh ơi, em đồng ý đi chơi với anh rùi nhé! {troll_note}"
    },

    // 8. Cấu hình thông báo Zalo qua Cloudflare Worker (Bảo mật 100%)
    notification: {
        api_url: "https://happy.nguyenhoangviethung.workers.dev",
        telegram_bot_token: "",
        telegram_chat_id: "",
        webhook_url: ""
    }
};

