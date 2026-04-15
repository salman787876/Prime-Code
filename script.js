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

  localStorage.setItem("user", JSON.stringify({
    discord,
    realname
  }));

  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("orderBox").classList.remove("hidden");
}

function createOrder() {
  const user = JSON.parse(localStorage.getItem("user"));

  const service = document.getElementById("service").value;
  const title = document.getElementById("title").value;
  const details = document.getElementById("details").value;

  if (!title || !details) {
    alert("اكتب تفاصيل الطلب");
    return;
  }

  const orderId = generateOrderID();

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    orderId,
    discord: user.discord,
    realname: user.realname,
    service,
    title,
    details,
    status: "pending",
    date: new Date().toLocaleString()
  });

  localStorage.setItem("orders", JSON.stringify(orders));

  document.getElementById("result").innerHTML =
    "✅ تم إرسال الطلب<br>📦 رقم الطلب: " + orderId;
}
