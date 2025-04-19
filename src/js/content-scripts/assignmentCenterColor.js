function updateEventBackgrounds() {
    const events = document.querySelectorAll('.cal-event, .month-event');
  
    events.forEach(event => {
      const statusText = event.innerText || "";
  
      if (statusText.includes("To do")) {
        event.style.backgroundColor = "#ffef5f"; // light yellow
      } else if (statusText.includes("Completed")) {
        event.style.backgroundColor = "#C5FFC0"; // light green
      } else if (statusText.includes("Graded")) {
        event.style.boxShadow = "0 0px 30px rgba(41, 234, 14, 0.9)";
        event.style.backgroundColor = "#94FF5F"; // Green
      } else if (statusText.includes("Overdue")){
        event.style.backgroundColor = "#FE4057";
      }
    });
  }
  
  // Initial run
  updateEventBackgrounds();
  
  // Optional: observe dynamic changes in case of AJAX content loading
  const observer = new MutationObserver(() => updateEventBackgrounds());
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  