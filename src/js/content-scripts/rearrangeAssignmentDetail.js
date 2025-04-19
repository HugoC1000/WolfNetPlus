(function() {
    'use strict';

    function rearrangeSections() {
        // Select the parent container that holds the sections
        const parentContainer = document.querySelector('.sky-column.sky-column-sm-9.sky-column-xs-12');

        if (!parentContainer) return;

        // Select the "Evaluation" and "Text" sections
        const evaluationSection = parentContainer.querySelector('app-assignment-evaluation-box');
        const textSection = parentContainer.querySelector('app-text-submission-box');

        if (evaluationSection && textSection && evaluationSection.nextElementSibling !== textSection) {
            // Move the "Evaluation" section before the "Text" section only if not already rearranged
            parentContainer.insertBefore(evaluationSection, textSection);
        }
    }

    // Run the rearrangement on page load
    rearrangeSections();

    // Observe for dynamic changes in a more targeted way
    const parentContainer = document.querySelector('.sky-column.sky-column-sm-9.sky-column-xs-12');
    if (parentContainer) {
        const observer = new MutationObserver(() => {
            rearrangeSections();
        });

        observer.observe(parentContainer, {
            childList: true, // Only observe changes to direct children
        });
    }
})();