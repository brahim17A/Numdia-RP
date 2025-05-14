
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    document.getElementById("loginBox").style.display = 'none';
    document.getElementById("infoBox").style.display = 'block';
    document.getElementById("displayName").textContent = username;
  } else {
    alert("يرجى إدخال اسم المستخدم وكلمة المرور!");
  }
}
