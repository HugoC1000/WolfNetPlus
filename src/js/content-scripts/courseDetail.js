(function() {
    'use strict';

    function setSecondButtonActive() {
        const buttons = document.querySelectorAll('#list-type-toggle .btn');
        if (buttons.length > 1) {
            // Remove the 'active' class from all buttons
            buttons.forEach(button => button.classList.remove('active'));

            // Add the 'active' class to the second button
            buttons[1].classList.add('active');

            // Simulate a click event on the second button to trigger its functionality
            buttons[1].click();

            console.log("Second button is now active and functionality triggered.");
            return true; // Indicate success
        } else {
            console.log("Buttons not found. Retrying...");
            return false; // Indicate failure
        }
    }

    function removeSearchBox() {
        const searchBoxDiv = document.querySelector('.input-append');
        if (searchBoxDiv) {
            searchBoxDiv.remove();
            console.log("Search box removed.");
            return true; // Indicate success
        } else {
            console.log("Search box not found. Retrying...");
            return false; // Indicate failure
        }
    }

    function observeAndSetButton() {
        const buttonObserver = new MutationObserver(() => {
            if (setSecondButtonActive()) {
                buttonObserver.disconnect(); // Stop observing once the button is set
            }
        });

        // Start observing the DOM for changes
        buttonObserver.observe(document.body, { childList: true, subtree: true });

        // Attempt to set the button immediately in case it's already available
        setSecondButtonActive();
    }

    function observeAndRemoveSearchBox() {
        const searchBoxObserver = new MutationObserver(() => {
            if (removeSearchBox()) {
                searchBoxObserver.disconnect(); // Stop observing once the search box is removed
            }
        });

        // Start observing the DOM for changes
        searchBoxObserver.observe(document.body, { childList: true, subtree: true });

        // Attempt to remove the search box immediately in case it's already available
        removeSearchBox();
    }

    // Check if the DOM is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            observeAndSetButton();
            observeAndRemoveSearchBox();
        });
    } else {
        observeAndSetButton();
        observeAndRemoveSearchBox();
    }
})();