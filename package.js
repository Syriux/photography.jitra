// Get the modal and modal image elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");

// Get all "See More" links
const seeMoreLinks = document.querySelectorAll(".see-more");

// Add click event listeners to "See More" links
seeMoreLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const imageSrc = this.getAttribute("data-image"); // Get the image source
    modal.style.display = "flex"; // Show the modal
    modalImg.src = imageSrc; // Set the modal image source
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close the modal when clicking outside the image
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});