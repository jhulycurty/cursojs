function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'imagem/fotomanha.png'
    document.body.style.background = 'rgb(231 224 221)'
    } else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = 'imagem/fototarde.png'
    document.body.style.background = 'rgb(229 139 72)'
    } else {
    // BOA NOITE!
    img.src = 'imagem/fotonoite.png'
    document.body.style.background = 'rgb(51 42 47)'
    }
}