// JavaScript (script.js)

// Get all project and achievement items
const projectItems = document.querySelectorAll('.project-item');
const achievementItems = document.querySelectorAll('.achievement-item');

// Attach event listeners to project items
projectItems.forEach((item) => {
  const info = item.querySelector('.project-info');
  item.addEventListener('mouseover', () => {
    info.style.display = 'block';
  });
  item.addEventListener('mouseout', () => {
    info.style.display = 'none';
  });
});

// Attach event listeners to achievement items
achievementItems.forEach((item) => {
  const info = item.querySelector('.achievement-info');
  item.addEventListener('mouseover', () => {
    info.style.display = 'block';
  });
  item.addEventListener('mouseout', () => {
    info.style.display = 'none';
  });
});
