// reg.js

document.getElementById('addRowBtn').addEventListener('click', function() {
    var tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var rowCount = tbody.getElementsByTagName('tr').length;

    var newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${rowCount + 1}</td>
        <td><input type="text" name="tin_number[]" required></td>
        <td><input type="text" name="company_name[]" required></td>
        <td><input type="file" name="consent_letter[]" required></td>
    `;

    tbody.appendChild(newRow);
});
