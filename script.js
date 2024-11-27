console.log("Hola desde la consola");

document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './Cv_AlanGerardoMontañoRamos_esp.pdf'; // Cambia esto por la URL de tu PDF
    link.download = 'CvAlanGerardoMontañoRamos.pdf'; // Cambia esto por el nombre que deseas para el archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
