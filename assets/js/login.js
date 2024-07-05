document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const username = loginForm.querySelector("input[type='text']").value;
      const password = loginForm.querySelector("input[type='password']").value;
  
      const storedUserData = JSON.parse(localStorage.getItem("user"));

      localStorage.setItem('user', JSON.stringify({ username: username }));
  
      if (storedUserData && storedUserData.username === username && storedUserData.password === password) {
        alert("Đăng nhập thành công!");
        // Chuyển hướng tới trang chính hoặc thực hiện hành động sau khi đăng nhập
        window.location.href = "index.html";
      } else {
        alert("Tên người dùng hoặc mật khẩu không chính xác.");
      }
    });
  });
