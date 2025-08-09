const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Bỏ active trên tất cả link và nội dung
    tabLinks.forEach(l => l.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    // Thêm active cho link được click
    link.classList.add('active');

    // Lấy id tab từ data-tab và bật phần nội dung tương ứng
    const tabId = link.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Xử lý gửi form đơn giản
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    formStatus.textContent = "Cảm ơn bạn đã gửi liên hệ!";
    formStatus.style.color = "green";

    contactForm.reset();
  });
}
