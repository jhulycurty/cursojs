var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log (`São exatamente ${hora}:${min}`)
if (hora <= 5) {
    console.log ('Boa madrugada!')
}   else if (hora >= 6 && hora < 12) {
    console.log ('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log ('Boa tarde!')
} if (hora >= 18) {
    console.log ('Boa noite!')
}