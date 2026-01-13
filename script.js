// Example: Toggle mobile menu (add to nav if needed)
document.addEventListener('DOMContentLoaded', () => {
    // Add any interactive features, e.g., smooth scrolling
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});