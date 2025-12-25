// Save day
function openDay(dayId) {
  localStorage.setItem("lastDay", dayId);
  // open devotional logic here
}

// Restore on load
window.addEventListener("load", () => {
  const last = localStorage.getItem("lastDay");
  if (last) {
    openDay(last);
  }
});
