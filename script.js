// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Add click event listeners to each link
  document.getElementById("personal-link").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("personal-info").scrollIntoView({ behavior: 'smooth' });
  });

  // Add event listener for hobbies-link
  document.getElementById("hobbies-link").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("hobbies").scrollIntoView({ behavior: 'smooth' });
  });

  // Add event listener for links-link
document.getElementById("links-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("links").scrollIntoView({ behavior: 'smooth' });
});
 // New event listener for books-link
 document.getElementById("books-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("books").scrollIntoView({ behavior: 'smooth' });
});

// Event listener for images link
document.getElementById("images-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("images").scrollIntoView({ behavior: 'smooth' });
});

// Select the lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.querySelector(".lightbox .close");

// Add click event listeners to each gallery image
document.querySelectorAll(".gallery-image").forEach(image => {
  image.addEventListener("click", (event) => {
    lightbox.style.display = "flex"; // Show the lightbox
    lightboxImage.src = event.target.src; // Set the lightbox image source to clicked image source
  });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});

 
// Function to open the contact modal
function openContactForm() {
  console.log('openContactForm function called'); // Debugging
  document.getElementById('contactFormModal').style.display = 'block';
}


    // Attach functions to the global scope
    window.openContactForm = openContactForm;
    window.closeContactForm = closeContactForm;

// Function to close the contact modal
function closeContactForm() {
  console.log('closeContactForm function called'); // Debugging
  document.getElementById('contactFormModal').style.display = 'none';
}

    // Attach functions to the global scope
    window.openContactForm = openContactForm;
    window.closeContactForm = closeContactForm;

// Form submission handler
document.getElementById('contactFormFields').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const name = document.getElementById('name').value;
  const designation = document.getElementById('designation').value;
  const contactNumber = document.getElementById('contactNumber').value;

  // Debugging: Show an alert with the data
  alert(`Submitted Details:\nName: ${name}\nDesignation: ${designation}\nContact Number: ${contactNumber}`);

  // Optional: Clear form fields after submission
  document.getElementById('contactFormFields').reset();

  // Close the modal after submission
  closeContactForm();
});


  // Add event listener for table-link
  document.getElementById("table-link").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("table").scrollIntoView({ behavior: 'smooth' });
  });

  // Set the footer content with file location and last modified date
  const footerContent = document.getElementById("footer-content");
  const filePath = "file:///D:/diptosir/new/index.html"; // Adjusted path to match your setup
  const lastModified = new Date(document.lastModified);

  // Format and set footer content
  if (footerContent) {
    footerContent.innerHTML = `Location: ${filePath} | Last modified: ${lastModified.toLocaleString()}`;
  }
});
