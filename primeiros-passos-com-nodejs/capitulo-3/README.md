# O que é o node?

Node é uma runtime, um interpretador javascript.
Ele é assíncrono e orientado a eventos.

## Runtime

O node interpreta js assim como o navegador faz.
O node apenas interpreta o javascript, usa a sintaxe
js, porém ele possuiu bibliotecas e funcionalidades diferentes
da disponibilizadas no ambiente do navegador.

Você pode digitar no cmd, node e você terá acesso a CLI
do node, pode você pode escrever sintaxe js.

CLI é um prompt de comando, onde o usuário pode inserir dados, geralmente
comando, e o CLI vai interpretar e executar o comando.

Para que o node consiga executar o js, o node utiliza uma ferramenta chamada
chrome's V8 javascript engine.

## Crome's V8 javascript engine

É um sistema que trata a execução de programas javascript.
Ele compila e executa o código javascript em vez de interpreta-lo.
Ele faz o gerenciamento da alocação de memória.
O node em sua instalação, já traz uma versão do V8.

## Assíncrono e orientado a eventos

O node não é multi-threads.
O node é mono-thread.
Ou seja, não executa tarefas em paralelo.

Cada requisição feita entra em uma fila de espera para ser processada.
O tal do event loop.
O node tem um sistema não bloqueante, ou seja, uma requisição não precisa
terminar para que outra seja iniciada.
Isso se dar por conta dos callbacks do javascript.

Em sistemas não bloqueantes você pode definir quais tarefas são
dependentes de outras. Tarefas independentes não precisam esperar
até que outras sejam resolvidas.
