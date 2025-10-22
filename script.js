document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    // --- Funcionalidad de Cambio de Tema ---
    
    // Función para aplicar o remover la clase de tema
    const toggleTheme = () => {
        body.classList.toggle('dark-theme');
        // Guardar la preferencia del usuario en localStorage
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // Cargar la preferencia de tema guardada al iniciar
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    // Evento para el botón de cambio de tema
    themeToggleButton.addEventListener('click', toggleTheme);


    // --- Funcionalidad del Formulario de Contacto ---

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita el envío tradicional del formulario
        
        // Simulación de envío de datos
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;

        // Mostrar un mensaje de éxito
        formMessage.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado. Te contactaremos a ${correo}.`;
        formMessage.style.backgroundColor = '#d4edda';
        formMessage.style.color = '#155724';
        formMessage.classList.remove('hidden');

        // Limpiar el formulario
        contactForm.reset();

        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    });
});