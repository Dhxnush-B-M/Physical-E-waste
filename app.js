
  // Function to open the image popup
  function openMapImage() {
    // Replace this URL with your actual photo link
    const imageUrl = "https://res.cloudinary.com/dvf6yetek/image/upload/v1760463358/WhatsApp_Image_2025-10-14_at_23.05.32_6ae8897d_xgsgvk.jpg";
    document.getElementById("mapImage").src = imageUrl;
    document.getElementById("mapImageContainer").style.display = "flex";
  }

  // Function to close the popup
  function closeMapImage() {
    document.getElementById("mapImageContainer").style.display = "none";
  }

  // Attach event to your Nearby E-bin icon
  document.addEventListener("DOMContentLoaded", () => {
    const mapIcon = document.querySelector(".fa-location-dot"); 
    if (mapIcon) {
      mapIcon.addEventListener("click", openMapImage);
    }
  });