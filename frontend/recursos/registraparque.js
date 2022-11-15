// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                registraparque();
                event.preventDefault()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
function registraparque() {

    let nombre = document.querySelector("#txtNombre").value;
    let direccion = document.querySelector("#txtDireccion").value;
    let correo = document.querySelector("#txtCorreo").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let visitantespermitidos = document.querySelector("#txtMaxCant").toString(value);
    let imagenlogo = document.querySelector("#txtImaLogo").value;
    let imagenmapa = document.querySelector("#txtImaMapa").value;
    let eslogan = document.querySelector("#txtEslogan").value;
    let descripcion = document.querySelector("#txtDescripcion").value;

    let url = `http://localhost:3000/parques`;
    let datos = {
        nombre: nombre,
        direccion: direccion,
        correo: correo,
        telefono: telefono,
        visitantespermitidos : visitantespermitidos,
        imagenlogo: imagenlogo,
        imagenmapa: imagenmapa,
        eslogan :eslogan,
        descripcion :descripcion
    };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(mensaje => {
            console.log(mensaje);
        })   


}