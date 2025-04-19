(function() {
    'use strict';

    // Change the favicon
    const faviconUrl = "//bbk12e1-cdn.myschoolcdn.com/ftpimages/464/site/1784/favicon/WPGA-favicon.png"; 

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = faviconUrl;

    // Function to update the logo
    function updateLogo() {
        const logoImg = document.querySelector('img[src="//bbk12e1-cdn.myschoolcdn.com/ftpimages/464/logo/75.jpg"]');
        if (logoImg) {
            logoImg.src = "//bbk12e1-cdn.myschoolcdn.com/ftpimages/464/logo/WPGAColourNoLogotype.png";
            console.log("Logo image source updated.");
        } else {
            console.log("Logo image not found. Waiting for it to load...");
        }
    }

    // Observe DOM changes to detect when the logo is added
    const observer = new MutationObserver(() => {
        const logoImg = document.querySelector('img[src="//bbk12e1-cdn.myschoolcdn.com/ftpimages/464/logo/75.jpg"]');
        if (logoImg) {
            updateLogo();
            observer.disconnect(); // Stop observing once the logo is updated
        }
    });

    // Start observing the DOM for changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Ensure the DOM is loaded before starting the observer
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            updateLogo();
        });
    } else {
        updateLogo();
    }

    // Function to set the title
    function setCustomTitle() {
        const desiredTitle = "WolfNet";
        if (document.title !== desiredTitle) {
            document.title = desiredTitle;
        }
    }

    // Set the title initially
    setCustomTitle();

    // Observe changes to the <title> element
    const titleObserver = new MutationObserver(() => {
        setCustomTitle();
    });

    titleObserver.observe(document.querySelector('title'), {
        childList: true,
        subtree: true,
    });
})();