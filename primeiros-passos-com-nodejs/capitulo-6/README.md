# NPM

O NPM é o gerenciador de pacotes, depedencias, ou módulos do node, chame como
quiser.

O NPM fornece uma interface CLI, onde podemos instalar, atualizar, remover,
codigos de terceiros.

O NPM trabalha com a importação de pacotes, ou seja, codigos de terceiros que
fazem alguma coisa, que você precisará usar no seu projeto.

## package.json

Antes de utilizar o npm, crie um arquivo chamado package.json dentro do
projeto. Esse arquivo será responsável por conter informações
técnicas sobre o projeto em questão, inclusive, suas dependencias.

Vantagem: ao utilizar o projeto em outro ambiente, não precisa levar junto
todos os pacotes, basta levar o arquivo package.json, e apartir dele instalar
todos os modulos.

Para criar o arquivo package.json, basta executar o comando `npm init` no
terminal.
