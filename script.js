function generateOrderID() {
  return "PRIME-" + Math.floor(100000 + Math.random() * 900000);
}

function createOrder() {
  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;

  if (!name) {
    alert("اكتب اسمك");
    return;
  }

  const orderId = generateOrderID();

  // تخزين مؤقت (محلي)
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    name: name,
    service: service,
    orderId: orderId,
    status: "pending"
  });

  localStorage.setItem("orders", JSON.stringify(orders));

  document.getElementById("result").innerHTML =
    "✅ تم إنشاء الطلب<br>📦 رقم الطلب: " + orderId;
}
