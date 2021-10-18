function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
    window.alert('ERRO! Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'imagem/bebe-m.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagem/jovem-m.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'imagem/adulto-m.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagem/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'imagem/bebe-f.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagem/jovem-f.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'imagem/adulto-f.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagem/idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}