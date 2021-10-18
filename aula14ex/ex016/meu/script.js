function clicar () {
    var inicio = document.getElementById ('inicio');
    var final = document.getElementById('final')
    var passo = document.getElementById('passo')
    var n = Number(inicio.value.length)
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar. Tente novamente!'
        //alert('ERRO! Verifique os valores e tente novamente!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(final.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando passo = 1.')
            p = 1
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //CONTAGEM REGRESSIVA
            for (var c = i; c >= f; c -=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}