// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
  });
});