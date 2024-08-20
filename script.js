// First, declare all necessary variables
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let productLinks = document.querySelectorAll('.box a.fas.fa-eye');

// Toggle the navbar visibility when the menu button is clicked
document.querySelector('#menu-btn').onclick = () => {
    // If the search form is open, close it
    if (searchForm.classList.contains('active')) {
        searchForm.classList.remove('active');
    }
    // Toggle the navbar visibility
    navbar.classList.toggle('active');
};

// Toggle the search form visibility when the search button is clicked
document.querySelector('#search-btn').onclick = () => {
    // If the navbar is open, close it
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
    // Toggle the search form visibility
    searchForm.classList.toggle('active');
};

// Ensure that both the navbar and search form are hidden when scrolling
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

// Function to handle product click events
productLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const productId = link.getAttribute('data-id');
        // Redirect to the product detail page
        window.location.href = `product-detail.html?id=${productId}`;
    });
});
