// Smooth scroll for button
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#video').scrollIntoView({
    behavior: 'smooth'
  });
});
