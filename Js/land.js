document.addEventListener('DOMContentLoaded', function() {
    let rows = document.querySelectorAll('#data-table tbody tr');

    rows.forEach(row => {
        row.addEventListener('click', function() {
            let url = row.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});
