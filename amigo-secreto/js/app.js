function adicionar() {
    nomeAmigo = document.getElementById('nome-amigo').value;
    if (nomeAmigo == '') {
        alert('Você não digitou nenhum nome.Verifique novamente');
        return;
    } else {

        if (listaAmigos.includes(nomeAmigo)) {
            alert('Esta pessoa já está participando do sorteio.Verifique novamente');
            document.getElementById('nome-amigo').value = '';
            return;
        } else {
            listaAmigos.push(nomeAmigo);
            document.getElementById('nome-amigo').value = '';
            document.getElementById('lista-amigos').textContent = listaAmigos;
        }
    }
}

function sortear() {
    if (listaAmigos.length < 4) {
        alert('Digite pelo menos 4 nomes para começar o sorteio');
        reiniciar();
        return;
    } else {

        for (let i = 0; i < listaAmigos.length; i++) {
            let sorteado = parseInt(Math.random() * listaAmigos.length);
            [listaAmigos[i],listaAmigos[sorteado]] = [listaAmigos[sorteado],listaAmigos[i]];
        }
    
        let sorteio = document.getElementById('lista-sorteio');
        for (let j = 0; j < listaAmigos.length; j++) {
            if (j == listaAmigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + listaAmigos[j] + ' --> ' + listaAmigos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + listaAmigos[j] + ' --> ' + listaAmigos[j+1] + '<br>';
            }
        }
    
        document.getElementById('lista-amigos').textContent = '';
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

let nomeAmigo;
let listaAmigos = [];