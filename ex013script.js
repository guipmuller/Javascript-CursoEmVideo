function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')        
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/ex013menino.png')
            } else if (idade <21) {
                img.setAttribute('src', 'imagens/ex013jovemh.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/ex013homem.png')
            } else {
                img.setAttribute('src', 'imagens/ex013idoso.png')                
            }            
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/ex013menina.png')
            } else if (idade <21) {
                img.setAttribute('src', 'imagens/ex013jovemm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/ex013mulher.png')
            } else {
                img.setAttribute('src', 'imagens/ex013idosa.png')                
            }            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}