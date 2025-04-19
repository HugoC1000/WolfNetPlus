(function() {
    'use strict';

    function collapseSections() {
        // Collapse Performance section
        const performanceCollapse = document.getElementById('performanceCollapse');
        if (performanceCollapse) {
            performanceCollapse.classList.remove('in');
            performanceCollapse.setAttribute('aria-expanded', 'false');
            performanceCollapse.setAttribute('aria-hidden', 'true');
            
            // Toggle chevron visibility
            const performanceChevrons = document.querySelectorAll('#performance .bb-tile-chevron');
            if (performanceChevrons.length >= 2) {
                performanceChevrons[0].style.display = 'none';
                performanceChevrons[1].style.display = 'block';
            }
        }

        // Collapse Attendance section
        const attendanceCollapse = document.getElementById('attendanceCollapse');
        if (attendanceCollapse) {
            attendanceCollapse.classList.remove('in');
            attendanceCollapse.setAttribute('aria-expanded', 'false');
            attendanceCollapse.setAttribute('aria-hidden', 'true');
            
            // Toggle chevron visibility
            const attendanceChevrons = document.querySelectorAll('#attendance .bb-tile-chevron');
            if (attendanceChevrons.length >= 2) {
                attendanceChevrons[0].style.display = 'none';
                attendanceChevrons[1].style.display = 'block';
            }
        }

        const activitiesCollapse = document.getElementById('activitiesCollapse');
        if (activitiesCollapse) {
            activitiesCollapse.classList.remove('in');
            activitiesCollapse.setAttribute('aria-expanded', 'false');
            activitiesCollapse.setAttribute('aria-hidden', 'true');
            
            // Toggle chevron visibility
            const activitiesCollapseChevron = document.querySelectorAll('#activities .bb-tile-chevron');
            if (activitiesCollapseChevron.length >= 2) {
                activitiesCollapseChevron[0].style.display = 'none';
                activitiesCollapseChevron[1].style.display = 'block';
            }
        }

    }

    // Initialize
    collapseSections();

    // Watch for dynamic content
    const observer = new MutationObserver(collapseSections);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();