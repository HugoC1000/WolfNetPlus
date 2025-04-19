// calendar-reorder.js
(function() {
    // Function to move Calendar after My Day
    function moveCalendarAfterMyDay() {
      try {
        // Get the top navigation list
        const topnav = document.querySelector('#site-nav #topnav-containter ul.topnav');
        
        if (!topnav) {
          console.log('Navigation menu not found');
          return;
        }
  
        // Find the "My Day" item (first item with parentitem class)
        const myDayItem = topnav.querySelector('li.oneline.parentitem.first');
        
        // Find the Calendar item by its ID
        const calendarNav = document.getElementById('calendar-subnav');
        if (!calendarNav) {
          return;
        }
        
        const calendarItem = calendarNav.closest('li');
        
        // Remove the Calendar item from its current position
        calendarItem.parentNode.removeChild(calendarItem);
        
        // Insert the Calendar item after My Day item
        myDayItem.insertAdjacentElement('afterend', calendarItem);
        
        // Update classes if needed
        if (calendarItem.classList.contains('last')) {
          calendarItem.classList.remove('last');
          
          // Find new last element and add last class if needed
          const items = topnav.querySelectorAll('li');
          items[items.length - 1].classList.add('last');
        }

      } catch (error) {
        console.error('Error moving calendar:', error);
      }
    }
  
    // Check if the page has fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', moveCalendarAfterMyDay);
    } else {
        // Also try after a small delay to ensure all dynamic content is loaded
        setTimeout(moveCalendarAfterMyDay, 1000);
      // Try immediately
      moveCalendarAfterMyDay();
      
    }
    
    // Additionally, use a MutationObserver to detect any dynamic changes
    // This helps when the navigation is loaded dynamically after page load
    const observer = new MutationObserver(function(mutations) {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
          const navExists = document.querySelector('ul.topnav');
          const calendarExists = document.getElementById('calendar-subnav');
          if (navExists && calendarExists) {
            moveCalendarAfterMyDay();
            observer.disconnect();
            break;
          }
        }
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  })();