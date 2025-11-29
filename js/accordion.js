/**
 * Accordion functionality for Coach Lee website
 */

// Initialize accordion on DOM load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Accordion script loaded'); // Debug log

    const accordion = document.getElementById('accordion');
    if (!accordion) {
        console.log('Accordion container not found');
        return;
    }

    const items = accordion.querySelectorAll('.accordion-item');
    console.log('Found', items.length, 'accordion items'); // Debug log

    items.forEach((item, index) => {
        const header = item.querySelector('.accordion-header');

        if (header) {
            header.addEventListener('click', function() {
                console.log('Clicked accordion item', index); // Debug log

                const isActive = item.classList.contains('active');

                // Close all accordion items
                items.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                // Open the clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                    console.log('Opened accordion item', index); // Debug log
                }
            });
        }
    });
});
