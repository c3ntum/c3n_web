// Container-Element auswählen
const footerContainer = document.getElementById('footer-container');

// Footer HTML dynamisch erstellen
const footerHTML = `
<footer class="bg-dark text-center text-white py-4">
    <p>&copy;2025 c3ntum. All rights reserved</p>
</footer>
`;

// Footer in den Container einfügen
footerContainer.innerHTML = footerHTML;