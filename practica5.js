// JavaScript para el menú vertical multinivel
window.onload = function() {
    // Botón y contenedor son las clases definidas en HTML en DIV y SPAN
    document.querySelector('.boton').addEventListener('click', function() {
        document.querySelector('.contenedor').classList.toggle('invisible'); // Aquí utilizamos la clase definida en el CSS
        this.classList.toggle('mif-chevron-right');
    });
};