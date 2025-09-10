document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons that open a modal
    const openModalButtons = document.querySelectorAll('[data-modal-target]');

    // Select all close buttons
    const closeModalButtons = document.querySelectorAll('.close-modal');

    // Add click event to all open modal buttons
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalTarget;
            const modal = document.querySelector(`.modal-${modalId}`);
            if (modal) {
                modal.showModal();
            }
        });
    });

    // Add click event to all close modal buttons
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.close();
            }
        });
    });

    // Add click event to close modal when clicking on the backdrop
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            // The '::backdrop' pseudo-element is not in the DOM,
            // so we check if the click is on the dialog itself.
            if (event.target === modal) {
                modal.close();
            }
        });
    });
});