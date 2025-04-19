(function() {
    'use strict';

    // Change the favicon
    const faviconUrl = "//bbk12e1-cdn.myschoolcdn.com/ftpimages/464/site/1784/favicon/WPGA-favicon.png"; 

    const logoImg = document.querySelector('img[src="//bbk12e1-cdn.myschoolcdn.com/ftpimages/464/logo/75.jpg"]');
    if (logoImg) {
        logoImg.src = "//bbk12e1-cdn.myschoolcdn.com/ftpimages/464/logo/WPGAColourNoLogotype.png";
    } else {
        console.log("Logo image not found.");
    }

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = faviconUrl;

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