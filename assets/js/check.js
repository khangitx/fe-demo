    // Kiểm tra xem có dữ liệu người dùng trong localStorage không
    let user = JSON.parse(localStorage.getItem('user'));
    // Hàm cập nhật nút Đăng nhập
    function updateLoginButton() {
      let loginButton = document.querySelector('.animated-border-btn span');
      if (user) {
        loginButton.textContent = user.username; // Hiển thị tên người dùng
        // Bạn có thể muốn thay đổi lớp CSS hoặc hành vi của nút ở đây
      } else {
        loginButton.textContent = 'Đăng nhập';
      }
    }

    // Gọi hàm cập nhật nút sau khi trang được tải
    window.onload = updateLoginButton;
    // (Tùy chọn) Xử lý sự kiện đăng xuất
    let logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        localStorage.removeItem('user');
        user = null;
        updateLoginButton();
      });
    }