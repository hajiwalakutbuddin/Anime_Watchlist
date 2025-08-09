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

document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('anime-search');
    if(searchInput) {
        searchInput.addEventListener('input', function(e) {
            let value = e.target.value.toUpperCase().replace(/ /g, '_');
            e.target.value = value;
        });
    }
});