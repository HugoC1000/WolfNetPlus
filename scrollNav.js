(function() {
    'use strict';

    // Configuration
    const config = {
        navId: 'site-nav-lower',
        scrollThreshold: 2,  // pixels
        hideAfter: 0,       // don't hide until scrolled 100px down
        pollInterval: 200,    // check for nav every 200ms if not found
        maxPollAttempts: 10   // max attempts before giving up
    };

    function initScrollNav() {
        const nav = document.getElementById(config.navId);
        if (!nav) {
            return false;
        }

        let lastScrollY = window.scrollY;
        let isHidden = false;

        // Style preparation

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Skip if minimal scroll movement
            if (Math.abs(currentScrollY - lastScrollY) < config.scrollThreshold) {
                lastScrollY = currentScrollY;
                return;
            }

            if (currentScrollY > lastScrollY &&  // scrolling down
                !isHidden &&                     // not already hidden
                currentScrollY > config.hideAfter) {  // scrolled enough
                nav.classList.add("nav-hidden");
                isHidden = true;
            } 
            else if (currentScrollY < lastScrollY && isHidden) {  // scrolling up and hidden
                nav.classList.remove("nav-hidden");
                isHidden = false;
            }

            lastScrollY = currentScrollY;
        };

        // Add scroll listener with debounce
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleScroll, 50);
        });

        return true;
    }

    // Try to initialize with increasing delays
    function initializeWithRetry(attempt = 0) {
        if (initScrollNav()) return;

        if (attempt < config.maxPollAttempts) {
            setTimeout(() => {
                initializeWithRetry(attempt + 1);
            }, config.pollInterval * (attempt + 1));
        } else {
            console.warn('Failed to initialize scroll nav after maximum attempts');
        }
    }

    // Start initialization when DOM is ready
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initializeWithRetry();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            initializeWithRetry();
        });
    }

    // Fallback for dynamic content
    const observer = new MutationObserver((mutations) => {
        if (document.getElementById(config.navId)) {
            initializeWithRetry();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();