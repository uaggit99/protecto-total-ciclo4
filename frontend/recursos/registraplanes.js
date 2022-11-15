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
                registraplanes();
                event.preventDefault()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
function registraplanes() {

    let nombre = document.querySelector("#txtPlanes").value;
    let color = document.querySelector("#txtColor").value;
    let valor = document.querySelector("#txtValor").value;
    let atraccionesvalidas = document.querySelector("#txtAtracciones").value;
    let id_parque = document.querySelector("#txtParque").value;
    

    let url = `http://localhost:3000/plans`;
    let datos = {
        nombre: nombre,
        color : color,
        valor : valor,
        atraccionesvalidas :atraccionesvalidas,
        id_parque :id_parque
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