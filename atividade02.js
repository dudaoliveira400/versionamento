function Verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var mes = document.getElementById('txtmes').value - 1; 
    var dia = document.getElementById('txtdia').value;
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        
        if (fsex[0].checked) {
            genero = 'homem';
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'bebe homem.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'joao.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'jovem.png');
            } else {
                img.setAttribute('src', 'idoso.png');
            }
            img.style.width = '150px'; 
            img.style.height = 'auto';  
        } else if (fsex[1].checked) {
            genero = 'mulher';
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'bebe mulher.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem 2.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta.png');
            } else {
                img.setAttribute('src', 'idosa.png');
            }
            img.style.width = '150px'; 
            img.style.height = 'auto';
        }

        res.style.textAlign = 'center';
        
        
        res.innerHTML = ''; 

        
        res.innerHTML += `Detectamos ${genero} com ${idade} anos.<br>`;

        
        if (idade >= 18) {
            res.innerHTML += '<p style="color: green;">Você é maior de idade.</p>';
        } else {
            res.innerHTML += '<p style="color: red;">Você é menor de idade.</p>';
        }

        
        res.appendChild(img);

        
        calcularContagemRegressiva(ano, mes, dia);
    }
}
        res.appendChild(img);

{
        calcularContagemRegressiva(ano, mes, dia);
    }


function calcularContagemRegressiva(ano, mes, dia) {
    var dataAniversario = new Date(ano, mes, dia);
    var dataAtual = new Date();
    
    
    if (dataAniversario < dataAtual) {
        dataAniversario.setFullYear(dataAtual.getFullYear() + 1);
    }

    
    var diff = dataAniversario - dataAtual;

    
    var dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diff % (1000 * 60)) / 1000);

    var contagemDiv = document.getElementById('contagem');
    contagemDiv.innerHTML = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos para o seu próximo aniversário!`;
}
