// Example of dynamically loading history data
const historyData = [
  { title: "E-Waste Pickup", date: "13 Oct 2025", time: "02:00 PM", status: "success", amount: 75 },
  { title: "Battery Waste", date: "11 Oct 2025", time: "09:30 AM", status: "pending", amount: 0 },
  { title: "Plastic Waste", date: "08 Oct 2025", time: "06:45 PM", status: "failed", amount: 0 }
];

const container = document.querySelector(".history-container");

// Clear old ones if any
container.innerHTML = "";

historyData.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("history-card", item.status);

  card.innerHTML = `
    <div class="history-left">
      <h3>${item.title}</h3>
      <p>${item.date} • ${item.time}</p>
    </div>
    <div class="history-right">
      <span class="amount">${item.amount > 0 ? `+₹${item.amount}` : "₹0"}</span>
      <p>${item.status === "success" ? "Completed" : item.status === "pending" ? "Pending" : "Cancelled"}</p>
    </div>
  `;

  container.appendChild(card);
});