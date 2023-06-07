document.addEventListener('DOMContentLoaded', function() {
    var scrollContent = document.querySelectorAll('.scroll-content');
    
    function fadeInElements() {
      scrollContent.forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight) {
          element.classList.add('fade-in');
        } else {
          element.classList.remove('fade-in');
        }
      });
    }
    
    // Apply fade-in animation on page load
    fadeInElements();
    
    // Apply fade-in animation on scroll
    var scrollTimeout;
    window.addEventListener('scroll', function() {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(fadeInElements, 100);
    });
  });
  