// 1. Funcionalidade: Modo Escuro / Claro
function alternarTema() {
    const body = document.body;
    
    // Alterna a classe no body
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}

// 2. Funcionalidade: Botão de Curtir com Contador
let contador = 0; // Variável para guardar o número

function curtirPagina() {
    contador++; // Aumenta 1
    // Atualiza o texto do HTML com o novo número
    document.getElementById('contador-curtidas').innerText = contador;
}

// 3. Funcionalidade: Criar Posts Dinamicamente
function criarPost() {
    // Pega o valor que foi digitado no textarea
    const textoDigitado = document.getElementById('texto-post').value;

    // Verifica se o texto não está vazio para não postar nada em branco
    if (textoDigitado.trim() === "") {
        alert("Por favor, digite algo antes de postar!");
        return;
    }

    // Cria um novo elemento div para o post
    const novoPost = document.createElement('div');
    
    // Adiciona classes do Bootstrap para ficar bonito (Card)
    novoPost.className = 'card p-3 mb-2 shadow-sm';
    
    // Adiciona o texto digitado dentro da div, com a data atual
    const dataHora = new Date().toLocaleTimeString();
    novoPost.innerHTML = `<strong>Usuário diz (${dataHora}):</strong> <p>${textoDigitado}</p>`;

    // Adiciona o novo post na área de mural (no começo da lista)
    const mural = document.getElementById('mural-posts');
    mural.prepend(novoPost);

    // Limpa a caixa de texto
    document.getElementById('texto-post').value = "";
}