document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('anime-search');
    if (!searchInput) return;
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        document.querySelectorAll('.anime-list li.eac').forEach(li => {
            const name = li.querySelector('.anime-text').textContent.toLowerCase();
            li.style.display = name.includes(filter) ? '' : 'none';
        });
    });
});