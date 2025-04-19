(function() {
    'use strict';


    const cssFiles = [
    chrome.runtime.getURL('modules/navbar.css'),
    chrome.runtime.getURL('modules/cards.css'),
    chrome.runtime.getURL('modules/progressbar.css'),
    chrome.runtime.getURL('modules/calender.css'),
    chrome.runtime.getURL('modules/classdetail.css'),
    chrome.runtime.getURL('modules/progress.css')
];

cssFiles.forEach(file => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file;
    document.head.appendChild(link);
});

})();