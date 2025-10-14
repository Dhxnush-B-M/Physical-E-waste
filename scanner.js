let html5QrCode;

window.addEventListener("load", () => {
  html5QrCode = new Html5Qrcode("qr-reader");

  const config = { fps: 10, qrbox: 250 };

  html5QrCode.start(
    { facingMode: "environment" },
    config,
    (decodedText) => {
      document.getElementById("scan-result").innerText = "QR Code: " + decodedText;
    },
    (error) => {}
  ).catch(err => {
    console.error("Camera start failed:", err);
  });
});

document.getElementById("back-btn").addEventListener("click", () => {
  html5QrCode.stop().then(() => {
    html5QrCode.clear();
    window.location.href = "index.html";
  });
});