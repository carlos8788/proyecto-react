// Helper para cambiar las clases del modo claro/oscuro usando classList
const toggleThemeClasses = (theme) => {
    const isDarkMode = theme === 'dark';

    // Cambiar clases del body
    document.body.classList.toggle('bg-dark', isDarkMode);
    document.body.classList.toggle('text-light', isDarkMode);
    document.body.classList.toggle('bg-light', !isDarkMode);
    document.body.classList.toggle('text-dark', !isDarkMode);

    // Cambiar clases del header
    const header = document.querySelector('header');
    console.log(header)
    if (header) {
        header.classList.toggle('bg-dark', isDarkMode);
        header.classList.toggle('text-light', isDarkMode);
        header.classList.toggle('bg-light', !isDarkMode);
        header.classList.toggle('text-dark', !isDarkMode);
    }
    // Nav Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.classList.toggle('text-white', isDarkMode);
        link.classList.toggle('text-dark', !isDarkMode);
    });
};


export default toggleThemeClasses