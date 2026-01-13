document.getElementById('contentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const heroText = document.getElementById('heroText').value;
    const eventTitle = document.getElementById('eventTitle').value;
    
    // Save to localStorage (or send to server)
    localStorage.setItem('heroText', heroText);
    localStorage.setItem('eventTitle', eventTitle);
    
    alert('Changes saved! Refresh the site to see updates.');
    
    // In real use, update index.html dynamically or via AJAX
});