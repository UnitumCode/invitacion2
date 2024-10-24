document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('box').addEventListener('click', function() {
        document.getElementById('content').style.backgroundImage = "url('assets/bg3.jpg')";
        console.log("Fondo cambiado en el div con id 'content'");
    });
});
