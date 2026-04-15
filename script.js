let currentService = "";

function switchBox(id) {
  document.querySelectorAll(".box").forEach(b => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function generateOrderID() {
  return "PRIME-" + Math.floor(Math.random() * 999999);
}

function login() {
  const discord = document.getElementById("discord").value;
  const name = document.getElementById("realname").value;

  if (!discord || !name) return alert("Fill all fields");

  localStorage.setItem("user", JSON.stringify({ discord, name }));
  switchBox("services");
}

function selectService(service) {
  currentService = service;
  document.getElementById("serviceTitle").innerText = service;
  switchBox("order");
}

function createOrder() {
  const user = JSON.parse(localStorage.getItem("user"));

  const title = document.getElementById("title").value;
  const details = document.getElementById("details").value;

  if (!title || !details) return alert("Fill all fields");

  const id = generateOrderID();

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    id,
    user,
    service: currentService,
    title,
    details
  });

  localStorage.setItem("orders", JSON.stringify(orders));

  document.getElementById("result").innerText =
    "Order ID: " + id;
}
