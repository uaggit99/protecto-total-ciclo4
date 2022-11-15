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
                registracomidas();
                event.preventDefault()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
function registracomidas() {

    let nombre = document.querySelector("#txtPuesto").value;
    let imagen = document.querySelector("#txtImagen").value;
    let id_zona = document.querySelector("#txtZona").value;
    let menu = document.querySelector("#txtMenu").value;
    

    let url = `http://localhost:3000/puestocomidas`;
    let datos = {
        nombre: nombre,
        imagen : imagen,
        id_zona :id_zona,
        menu :menu
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