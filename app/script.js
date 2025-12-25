// Save day
function openDay(dayId) {
  localStorage.setItem("lastDay", dayId);
}

window.addEventListener("load", () => {
  const last = localStorage.getItem("lastDay");
  if (last) openDay(last);
});



