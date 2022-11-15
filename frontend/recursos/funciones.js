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
                registrarusuario();
                event.preventDefault()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
function registrarusuario() {

    let nombres = document.querySelector("#txtNombres").value;
    let apellidos = document.querySelector("#txtApellidos").value;
    let correo = document.querySelector("#txtCorreo").value;
    let documento = document.querySelector("#txtDocumento").value;
    let fecha = document.querySelector("#txtFecha").value;
    let cargo = document.querySelector("#txtCargo").value;
    let celular = document.querySelector("#txtCelular").value;
    let url = `http://localhost:3000/usuarios`;
    let datos = {
        fecha: fecha,
        nombres: nombres,
        apellidos: apellidos,
        documento: documento,
        correo: correo,
        cargo: cargo,
        celular: celular
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