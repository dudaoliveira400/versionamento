function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resul')
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO! Verifique o dados e tente novamente')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ""
       //imagem
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if(fsex[0].checked){
        genero = 'homem'
        if (idade >= 0 && idade < 12){
         foto.src = 'bebe homem.png';
        } else if ( idade < 21){
            img.setAttribute('src','joao.png')
        } else if ( idade < 50){
            img.setAttribute('src','jovem.png')
        }  else if( idade >=50) {
            img.setAttribute('src','idoso.png')
        }

       } else if (fsex[1].checked){
        genero= 'mulher'
        if (idade >= 0 && idade < 12){
            img.setAttribute('src','bebe mulher.png')
        } else if ( idade < 21){
            img.setAttribute('src','jovem 2.png')
        } else if ( idade < 50){
            img.setAttribute('src','adulta.png')
        }  else if( idade >=50) {
            img.setAttribute('src','idosa.png')
        }
       }
       resul.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       
       res.appendChild(img)
    }
}