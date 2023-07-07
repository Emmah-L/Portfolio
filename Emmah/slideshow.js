document.addEventListener("DOMContentLoaded", function(event) {
    var currentIndex = 0;
    var images = document.getElementsByClassName("slideshow-image");
  
    function showImage(index) {
      if (index >= images.length) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = images.length - 1;
      }
  
      for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
  
      images[currentIndex].style.display = "block";
    }
  
    function nextImage() {
      currentIndex++;
      showImage(currentIndex);
    }
  
    function previousImage() {
      currentIndex--;
      showImage(currentIndex);
    }
  
    // Show the initial image
    showImage(currentIndex);
  
    // Change image every 3 seconds
    setInterval(nextImage, 3000);
  });
  