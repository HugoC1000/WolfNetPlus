(function() {
    'use strict';

    function modifyColumns() {
        // Process course rows
        document.querySelectorAll('#coursesContainer .row').forEach(row => {
            // Find teacher column by looking for the last column with teacher info
            const teacherCol = row.querySelector('.col-md-3:has(.bb-avatar-wrapper-medium)');
            if (teacherCol) {
                teacherCol.remove();
            }
        });

        // Process activity rows
        document.querySelectorAll('#activitiesContainer .row').forEach(row => {
            // Find teacher column by looking for email links in last column
            const teacherCol = row.querySelector('.col-md-3:has(a[href^="mailto:"])');
            if (teacherCol) {
                teacherCol.remove();
            }
        });

        // Set all remaining non-teacher columns to col-md-3
        document.querySelectorAll('#coursesContainer .row > [class^="col-md-"], #activitiesContainer .row > [class^="col-md-"]').forEach(col => {
            // Skip if already col-md-3
            if (!col.classList.contains('col-md-3')) {
                const currentClass = Array.from(col.classList).find(c => c.startsWith('col-md-'));
                if (currentClass) {
                    col.classList.remove(currentClass);
                    col.classList.add('col-md-3');
                }
            }
        });

    }

    // Initialize
    modifyColumns();

    // Watch for dynamic content
    const observer = new MutationObserver(modifyColumns);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();