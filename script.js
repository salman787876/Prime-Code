let selectedService = "";

function generateOrderID() {
  return "PRIME-" + Math.floor(100000 + Math.random() * 900000);
}

function login() {
  const discord = document.getElementById("discord").value;
  const realname = document.getElementById("realname").value;

  if (!discord || !realname) {
    alert("عبي كل البيانات");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ discord, realname }));

  document.getElementById("login").classList.add("hidden");
  document.getElementById("services").classList.remove("hidden");
}

function selectService(service) {
  selectedService = service;

  document.getElementById("services").classList.add("hidden");
  document.getElementById("order").classList.remove("hidden");

  document.getElementById("serviceTitle").innerText = service;
}

function createOrder() {
  const user = JSON.parse(localStorage.getItem("user"));

  const title = document.getElementById("title").value;
  const details = document.getElementById("details").value;

  if (!title || !details) {
    alert("اكتب التفاصيل");
    return;
  }

  const orderId = generateOrderID();

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    orderId,
    discord: user.discord,
    realname: user.realname,
    service: selectedService,
    title,
    details,
    status: "pending"
  });

  localStorage.setItem("orders", JSON.stringify(orders));

  document.getElementById("result").innerHTML =
    "✅ تم إرسال الطلب<br>📦 رقم الطلب: " + orderId;
}
