(function() {
    'use strict';

    function rearrangeSections() {
        // Select the parent container that holds the sections
        const parentContainer = document.querySelector('.sky-column.sky-column-sm-9.sky-column-xs-12');

        if (!parentContainer) return false; // Indicate failure if the container is not found

        // Select the "Evaluation", "Description", and "Text" sections
        const evaluationSection = parentContainer.querySelector('app-assignment-evaluation-box');
        const descriptionSection = parentContainer.querySelector('app-assignment-description-box');
        const textSection = parentContainer.querySelector('app-text-submission-box');

        if (evaluationSection && textSection && evaluationSection.nextElementSibling !== textSection) {
            // Move the "Evaluation" section before the "Text" section only if not already rearranged
            parentContainer.insertBefore(evaluationSection, textSection);
            console.log("Moved Evaluation section before Text section.");
            return true; // Indicate success
        } else if (evaluationSection && descriptionSection && evaluationSection.nextElementSibling !== descriptionSection) {
            // Move the "Evaluation" section before the "Description" section only if not already rearranged
            parentContainer.insertBefore(evaluationSection, descriptionSection);
            console.log("Moved Evaluation section before Description section.");
            return true; // Indicate success
        }

        console.log("Sections not ready yet. Retrying...");
        return false; // Indicate failure
    }

    function observeAndRearrangeSections() {
        const parentContainer = document.querySelector('.sky-column.sky-column-sm-9.sky-column-xs-12');
        if (!parentContainer) {
            console.log("Parent container not found. Waiting...");
            return;
        }

        const observer = new MutationObserver(() => {
            if (rearrangeSections()) {
                observer.disconnect(); // Stop observing once the sections are rearranged
                console.log("Rearrangement complete. Observer disconnected.");
            }
        });

        // Start observing the parent container for changes
        observer.observe(parentContainer, {
            childList: true,
            subtree: true,
        });

        // Attempt to rearrange sections immediately in case they are already available
        rearrangeSections();
    }

    // Check if the DOM is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeAndRearrangeSections);
    } else {
        observeAndRearrangeSections();
    }
})();