/**
 * Accordion functionality for Coach Lee website
 */

function toggleAccordion(index) {
    const accordion = document.getElementById('accordion');
    const items = accordion.querySelectorAll('.accordion-item');
    const targetItem = items[index];

    if (!targetItem) return;

    const isActive = targetItem.classList.contains('active');

    // Close all accordion items
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Open the clicked item if it wasn't active
    if (!isActive) {
        targetItem.classList.add('active');
    }
}

// Initialize accordion on DOM load
document.addEventListener('DOMContentLoaded', function() {
    const accordion = document.getElementById('accordion');
    if (!accordion) return;

    const headers = accordion.querySelectorAll('.accordion-header');
    headers.forEach((header, index) => {
        header.addEventListener('click', function() {
            toggleAccordion(index);
        });
    });
});
