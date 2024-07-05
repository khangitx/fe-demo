document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("form");
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const email = registerForm.querySelector("input[type='email']").value;
      const username = registerForm.querySelector("input[type='text']").value;
      const password = registerForm.querySelector("input[type='password']").value;
  
      if (email && username && password) {
        const userData = {
          email: email,
          username: username,
          password: password
        };
  
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Đăng ký thành công!");
        window.location.href = "login.html";
      } else {
        alert("Vui lòng điền đầy đủ thông tin.");
      }
    });
  });
  