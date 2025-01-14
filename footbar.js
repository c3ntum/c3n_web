// Container-Element auswählen
const footerContainer = document.getElementById('footer-container');

// Footer HTML dynamisch erstellen
const footerHTML = `
<footer class="bg-dark text-center text-white py-4">
    <div class="d-flex justify-content-center align-items-center">
        <p class="mb-0">&copy;2025 c3ntum. All rights reserved</p>
        <a href="disclaimer.html" class="ms-2 text-white text-decoration-underline">Disclaimer</a>
        <a href="copyright.html" class="ms-2 text-white text-decoration-underline">Copyright</a>
    </div>
</footer>
`;

// Footer in den Container einfügen
footerContainer.innerHTML = footerHTML;