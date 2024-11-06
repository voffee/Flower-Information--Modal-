
// Define UI Variables
const dialog = document.querySelector('.modal');
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');

// Add Event Listeners
openModal.addEventListener('click', modalDisplay)

// Create Functions
function modalDisplay() {
    dialog.showModal();
}