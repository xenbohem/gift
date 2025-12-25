let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "inline-block";
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) {
    alert("On iPhone: Share → Add to Home Screen ✨");
    return;
  }
  deferredPrompt.prompt();
  deferredPrompt = null;
});
