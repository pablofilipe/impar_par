function gerarResultado() {

    let numeroInformado = parseInt(document.getElementById('numero').value)
    let impares = []
    let pares = []

    if (numeroInformado === '' || isNaN(numeroInformado)) {
        Swal.fire({
            icon: 'warning',
            title: 'Ops!',
            html: `Entrada inválida! É necessário informar um número.`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

        ocultarResultado()

        return false
    } else {
        for (let i = 1; i <= numeroInformado; i++) {
            if (i % 2 !== 0) {
                impares.push(i)
            } else {
                pares.push(i)
            }
        }

    }

    exibirResultado( impares, pares )

}

function ocultarResultado() {
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('impares').innerHTML = ''
    document.getElementById('pares').innerHTML = ''
}

function exibirResultado( impares, pares ) {
    document.getElementById('resultado').style.display = 'block'
    document.getElementById('impares').innerHTML = impares
    document.getElementById('pares').innerHTML = pares
    document.getElementById('numero').value = ''
}