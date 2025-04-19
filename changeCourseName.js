(function() {
    'use strict';

    const MAX_RETRIES = 10; // Maximum number of retries
    const RETRY_DELAY = 500; // Delay between retries in milliseconds
    let retryCount = 0;

    function updateCourseNames() {
        // Select all course name elements within the courses container
        const courseNameElements = document.querySelectorAll('#coursesContainer .row .col-md-3 h3');

        if (courseNameElements.length === 0) {
            console.log(`No courses found yet. Retrying... (${retryCount + 1}/${MAX_RETRIES})`);
            if (retryCount < MAX_RETRIES) {
                retryCount++;
                setTimeout(updateCourseNames, RETRY_DELAY); // Retry after a delay
            } else {
                console.log("Max retries reached. Stopping.");
            }
            return; // Exit if no courses are found
        }

        courseNameElements.forEach(courseNameElement => {
            // Get the text content of the course name
            const courseName = courseNameElement.textContent;

            // Remove everything after and including the dash
            const updatedName = courseName.split(' - ')[0].trim();

            // Update the course name element
            courseNameElement.textContent = updatedName;
        });

        console.log("Course names updated.");
    }

    // Debounce function to limit how often updateCourseNames is called
    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Debounced version of updateCourseNames
    const debouncedUpdateCourseNames = debounce(updateCourseNames, 300);

    // Run the function on page load with retries
    updateCourseNames();

    // Observe for dynamic changes in case the content is loaded asynchronously
    const observer = new MutationObserver(() => {
        debouncedUpdateCourseNames();
    });

    const coursesContainer = document.querySelector('#coursesContainer');
    if (coursesContainer) {
        observer.observe(coursesContainer, {
            childList: true,
            subtree: true,
        });
    } else {
        console.log("Courses container not found.");
    }
})();