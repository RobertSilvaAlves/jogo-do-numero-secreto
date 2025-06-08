# 🎯 Jogo do Número Secreto

Um mini jogo interativo desenvolvido com **HTML**, **CSS** e **JavaScript**, onde o jogador precisa adivinhar um número secreto entre 1 e 10.

---

## 🕹️ Como funciona

- O jogo sorteia um número aleatório entre 1 e 10.
- O jogador digita seu palpite e clica em "Chutar".
- O sistema informa se o número é maior, menor ou se foi acertado.
- A cada tentativa, o contador de tentativas é atualizado.
- Quando o número é acertado:
  - A mensagem muda de cor para verde.
  - O botão de chute é desativado.
- O botão "Jogar Novamente" reinicia o jogo com um novo número secreto.

---

## 📁 Estrutura do projeto

```plaintext
📦 projeto/
├── index.html        # Estrutura do jogo
├── style.css         # Estilização visual (tema de jogo)
└── script.js         # Lógica do jogo (interatividade e validação)
