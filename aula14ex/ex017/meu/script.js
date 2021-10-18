function clicar () {
    var num = document.getElementById ('txtn')
    var tab = document.getElementById ('tabuada')
    var res = document.getElementById ('res')

    if (num.value.length == 0) {
        alert('ERRO! Digite um número e tente novamente.')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` 
            tab.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
}
}