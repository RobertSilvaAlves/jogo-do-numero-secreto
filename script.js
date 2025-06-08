let numeroAleatorio = Math.floor(Math.random() * 10 + 1);
const numeroEscolhido = document.querySelector('.chute');
const btnChute = document.querySelector('.botao_chute');
const btnReset = document.querySelector('.reset');
const mensagem = document.querySelector('.acertou_ou_errou');
const tentativasInfo = document.querySelector('.tentativas_info');

let tentativas = 1;

btnChute.addEventListener('click', () => {
    const chute = Number(numeroEscolhido.value);
    tentativasInfo.textContent = `Tentativas: ${tentativas}`;


    // Validação de input vazio
    if (numeroEscolhido.value === '') {
        alert('Digite um número antes da tentativa!');
        return;
    }

    // Validação de número fora do intervalo
    if (chute < 1 || chute > 10) {
        alert('Número inválido! Digite um número entre 1 e 10.');
        return;
    }

    // Remover classes antigas antes de adicionar nova animação
    mensagem.classList.remove('correto', 'piscar');
    void mensagem.offsetWidth; // Reaplica animação

    // Verifica acerto
    if (chute === numeroAleatorio) {
        mensagem.textContent = `🎉 Você acertou em ${tentativas} tentativa(s)!`;
        btnChute.disabled = true;
        mensagem.classList.add('correto');
    } else if (chute < numeroAleatorio) {
        mensagem.textContent = "🔼 O número é maior!";
        mensagem.classList.add('piscar');
    } else {
        mensagem.textContent = "🔽 O número é menor!";
        mensagem.classList.add('piscar');
    }

    tentativas++;
});

btnReset.addEventListener('click', () => {
    numeroAleatorio = Math.floor(Math.random() * 10 + 1);
    numeroEscolhido.value = '';
    tentativas = 1;
    mensagem.textContent = '🎮 Vamos começar novamente!';
    mensagem.classList.remove('correto', 'piscar');
    btnChute.disabled = false;
    tentativasInfo.textContent = 'Tentativas: 0';

    // Para testes:
    // console.log("Novo número:", numeroAleatorio);
});
