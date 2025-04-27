(function() {
    'use strict';

    function insertBackground() {
        // Create the SVG element
        const svgElement = document.createElement('div');
        svgElement.innerHTML = `
            <svg class="background-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 560">
                <g mask="url(#SvgjsMask2555)" fill="none">
                  <rect width="1440" height="560" x="0" y="0" fill="url(#SvgjsLinearGradient2556)"></rect>
                  <path d="M1440 0L1353.9 0L1440 171.76z" fill="rgba(255, 255, 255, .1)"></path>
                  <path d="M1353.9 0L1440 171.76L1440 219.07L724.0900000000001 0z" fill="rgba(255, 255, 255, .075)"></path>
                  <path d="M724.09 0L1440 219.07L1440 295.46L634.88 0z" fill="rgba(255, 255, 255, .05)"></path>
                  <path d="M634.88 0L1440 295.46L1440 374.04999999999995L335.85 0z" fill="rgba(255, 255, 255, .025)"></path>
                  <path d="M0 560L347.06 560L0 498.05z" fill="rgba(0, 0, 0, .1)"></path>
                  <path d="M0 498.05L347.06 560L638.98 560L0 242.05z" fill="rgba(0, 0, 0, .075)"></path>
                  <path d="M0 242.05L638.98 560L724.8 560L0 211.58z" fill="rgba(0, 0, 0, .05)"></path>
                  <path d="M0 211.58000000000004L724.8 560L829.78 560L0 111.67000000000004z" fill="rgba(0, 0, 0, .025)"></path>
                </g>
                <defs>
                  <mask id="SvgjsMask2555">
                    <rect width="1440" height="560" fill="#ffffff"></rect>
                  </mask>
                  <linearGradient x1="15.28%" y1="-39.29%" x2="84.72%" y2="139.29%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient2556">
                    <stop id="gradient-start" stop-color="rgba(255, 255, 255, 0.5)" offset="0"></stop>
                    <stop id="gradient-end" stop-color="rgba(31, 50, 220, 0.7)" offset="0.7"></stop>
                  </linearGradient>
                </defs>
            </svg>
        `;

        // Append the SVG element to the body or a specific container
        document.body.appendChild(svgElement.firstElementChild);

        console.log("SVG background added to the DOM.");
    }

    // Ensure the DOM is loaded before inserting the background
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertBackground);
    } else {
        insertBackground();
    }
})();