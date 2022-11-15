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
                registrazona();
                event.preventDefault()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
function registrazona() {

    let nombre = document.querySelector("#txtZona").value;
    let color = document.querySelector("#txtColor").value;
    let id_parque = document.querySelector("#txtParque").value;
    let descripcion = document.querySelector("#txtDescripcion").value;
    

    let url = `http://localhost:3000/zonas`;
    let datos = {
        nombre: nombre,
        color : color,
        id_parque : id_parque,
        descripcion : descripcion
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