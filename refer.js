// Generate a random referral code (optional)
const referralCode = "EW" + Math.floor(10000 + Math.random() * 90000);
document.getElementById("referral-code").textContent = referralCode;

const copyBtn = document.getElementById("copy-btn");
const successMessage = document.getElementById("success-message");
const shareBtn = document.getElementById("share-btn");

// Copy referral code
copyBtn.addEventListener("click", () => {
  const code = document.getElementById("referral-code").textContent;
  navigator.clipboard.writeText(code);
  successMessage.classList.remove("hidden");

  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 3000);
});

// Share referral link
shareBtn.addEventListener("click", () => {
  const code = document.getElementById("referral-code").textContent;
  const shareText = `♻️ Join the E-Waste Recycling App! Use my referral code ${code} and earn rewards: https://yourapp.com`;
  
  if (navigator.share) {
    navigator.share({
      title: "Refer & Earn - E-Waste App",
      text: shareText,
      url: "https://yourapp.com"
    });
  } else {
    alert("Share feature is not supported on this device.");
  }
});