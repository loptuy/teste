// script.js — login e registro via localStorage

// Observação: elementos podem não existir simultaneamente (login x register)
const userInput = document.getElementById("user");
const phoneInput = document.getElementById("phone");
const passInput = document.getElementById("pass");

function showMessage(message, type = "error") {
  const div = document.createElement("div");
  div.className = "toast";
  div.textContent = message;
  div.style.background = type === "error" ? "#ff4d4d" : "#28a745";
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 2200);
}

// Registro
function registerUser() {
  const user = (userInput && userInput.value || "").trim();
  const phone = (phoneInput && phoneInput.value || "").trim();
  const pass = (passInput && passInput.value || "").trim();

  if (!user || !phone || !pass) {
    showMessage("Preencha todos os campos!", "error");
    return;
  }

  localStorage.setItem("vast_user", user);
  localStorage.setItem("vast_phone", phone);
  localStorage.setItem("vast_pass", pass);

  showMessage("Conta criada com sucesso!", "success");

  if (userInput) userInput.value = "";
  if (phoneInput) phoneInput.value = "";
  if (passInput) passInput.value = "";

  setTimeout(() => window.location.href = "login.html", 1200);
}

// Login
function login() {
  const phone = (phoneInput && phoneInput.value || "").trim();
  const pass = (passInput && passInput.value || "").trim();

  const savedPhone = localStorage.getItem("vast_phone");
  const savedPass = localStorage.getItem("vast_pass");

  if (phone === savedPhone && pass === savedPass) {
    showMessage("Login realizado com sucesso!", "success");
    setTimeout(() => window.location.href = "https://sites.google.com/view/vastbitloud", 900);
  } else {
    showMessage("Telefone ou senha incorretos!", "error");
    if (passInput) passInput.value = "";
  }
}
