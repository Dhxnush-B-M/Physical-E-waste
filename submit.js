const form = document.getElementById("ewaste-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form refresh

  // Optionally, you can save data to Firebase or backend here
  // For now, just show success message
  form.reset();
  successMessage.classList.remove("hidden");

  // Hide the message after few seconds
  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 4000);
});