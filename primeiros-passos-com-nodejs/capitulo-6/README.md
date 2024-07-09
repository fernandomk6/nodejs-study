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

Depois de executar esse comando você já poderá instalar seus pacotes.

### lodash

Para teste, vamos instalar o módulo lodash que é uma biblioteca de funções
javascript.

Como adicionar um módulo ao nosso projeto?
Execute: `npm install -save lodash`
Esse comando instrui o npm a fazer o download de todos os arquivos que compõe
o módulo lodash. Caso o lodash tenha módulos dependentes, esses também serão
instalados.

Utilizamos a flag `-save` para fazer com que a dependencia instalada seja salva
no package.json, dentro da propriedade "dependencies".
O NPM também trabalha com um sistema de versionamento bem simples.

Ao instalar uma dependencia, o NPM vai criar uma pasta chamada "node_modules",
essa pasta é a pasta padrão dos módulos. Cada modulo instalado em seu projeto
será salvo dentro dessa pasta.
