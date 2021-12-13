// conferir senhas
$('#senha2').on('focusout', e => {
    let a = $('#senha1').val()
    let b = $('#senha2').val()

    if(a != b | b.length == 0) {
        $('#senha2').css('border', 'solid 2px red')
            $('#erroSenha').css('display', 'block')
            $('#acertoSenha').css('display', 'none')
    } else {
        $('#senha2').css('border', 'solid 2px green')
            $('#acertoSenha').css('display', 'block')
            $('#erroSenha').css('display', 'none')
    }
})

// cep
$('#cep').on('focusout', e => {
    var cep = $('#cep').val()

    if(cep.length == 8) {
        let url = `https://viacep.com.br/ws/${cep}/json/`

        fetch(url).then(function(response) { // fetch -> PARA CONSUMIR A API | then -> ESPERA UMA FUNÇÃO o parametro RESPONSE
            response.json().then(mostrarEndereço) // pega o response, o json e passa o THEN para converter para um objeto
        }) 
    } else if(cep.length == 0 | cep.length > 8) {
        alert('Por favor digite o CEP!')
    } else {
        $('#cep').append('<p>correto</p>')
    }
})

function mostrarEndereço(dados) {
    let endereco = $('#endereco')
    let bairro = $('#bairro')
    let cidade = $('#cidade')
    let uf = $('#uf')

    if(dados.erro) {
        alert('Não foi possível encontrar o CEP!')
    } else {
        endereco.val(dados.logradouro)
        bairro.val(dados.bairro)
        cidade.val(dados.localidade)
        uf.val(dados.uf)
    }
}