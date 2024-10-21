// Select all elements with the 'fade-in-section' class
const sections = document.querySelectorAll('.fade-in-section');

// Add 'is-visible' class to sections when they enter the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
