document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs
        tabs.forEach(function(tab) {
          tab.classList.remove('active');
        });
  
        // Add active class to the clicked tab
        this.classList.add('active');
  
        // Hide all tab contents
        tabContents.forEach(function(content) {
          content.style.display = 'none';
        });
  
        // Display the corresponding tab content
        const target = this.getAttribute('data-target');
        document.querySelector(target).style.display = 'block';
      });
    });
  });
  