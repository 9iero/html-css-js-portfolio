// Wii-style clock and date in the bottom bar
function tick() {
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  document.getElementById("date").textContent = now.toLocaleDateString([], {
    weekday: "short",
    month: "numeric",
    day: "numeric",
  });
}
document.getElementById("year").textContent = new Date().getFullYear();
tick();
setInterval(tick, 1000);
