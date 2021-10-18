function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12 ) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML += ' Bom dia!'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML += ' Boa tarde!'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
        msg.innerHTML += ' Boa noite!'
    }
}