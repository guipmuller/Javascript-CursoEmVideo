function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += ' Bom dia!'
        img.src = 'imagens/ex012manha.png'
        document.body.style.background = 'rgb(0, 100, 0)'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += ' Boa tarde!'
        img.src = 'imagens/ex012tarde.png'
        document.body.style.background = 'rgb(184, 134, 11)'
    } else {
        msg.innerHTML += ' Boa noite!'
        img.src = 'imagens/ex012noite.png'
        document.body.style.background = 'rgb(8, 9, 63)'
    }
}