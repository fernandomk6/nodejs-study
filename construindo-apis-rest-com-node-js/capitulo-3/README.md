# Principais comandos do NPM

- npm init: exibe um questionário para auxiliar na criação e descrição
do package.js do seu projeto.
- npm install modulo: Instala um módulo no projeto
- npm install -g modulo: Instala um módulo de forma global
- npm install modulo --save: instala um modulo e salva dentro de dependencies
do package.json
- npm install modulo --save-dev: Instala um modulo e salva dentro do
package.json na propriedade devDependencies
- npm list: Lista todos os modulos que foram instalados no projeto
- nom list -g: Lista todos os módulos globais que foram instalados
- npm remove modulo: Desinstala um modulo do projeto
- npm remove -g modulo: Desinstala um módulo global
- npm remove modulo --save-dev: Desinstala um módulo que estaja dentro da
propriedade devDependencies do package.json
- npm remove modulo --save: Desinstala um módulo que estaja dentro da
propriedade dependencies do package.json
- npm update modulo: Atualiza a versao de um modulo do projeto
- npm update -g modulo: Atualiza a versao de um modulo global
- npm -v: Exibe a versão do npm
- npm adduser nome: Cria um usuário no site `https://npmjs.com`
- npm whoami: Exibe detalhes do seu perfil público no side do NPM, é necessário
criar um usuário pelo comando anterior ou diretamente no site
- npm publish: Publica um modulo no site do npm
- npm help: Pede socorro
- npm shrinkwrap: Trava as versoes de todas as dependencias dentro do arquivo
npm-shrinkwrap.json de modo que você tenha total controle sobre quais
dependencias serão usadas

## Entendendo o package.json

- Todo projeto node é chamado de módulo.
- Cada modulo tem um arquivo package.json
- O arquivo package.json, descreve o modulo atual e suas dependencias

Entenda os versionamentos:

``` json
{
   "name": "meu-primero-node-app",
   "description": "Meu primeiro app Node.js",
   "author": "User <user@email.com>",
   "version": "1.2.3",
   "private": true,
   "dependencies": {
      "modulo-1": "1.0.0", // Somente será instalado a versão 1.0.0
      "modulo-2": "~1.0.0", // Permite atualizar em nivel de patch (1.0.x)
      "modulo-3": ">=1.0.0" // Permite atualizar para versões maior ou igual a 1.0.0
   },
   "devDependencies": {
      "modulo-4": "*" // Sempre atualizara para a versao mais recente
   }
}

Pereira, Caio Ribeiro. Construindo APIs REST com Node.js: Caio Ribeiro Pereira (Portuguese Edition) (p. 39). Casa do Código. Edição do Kindle. 
```

## Automatizando tarefas com NPM

Crie novos comandos que serão executados a partir do comando `npm run nome`.
Para criar um novo comando, basta criar uma nova propriedade dentro do objeto
`scripts` dentro do pachage.json.

Exemplo:

```json
{
   "name": "meu-primero-node-app",
   "description": "Meu primeiro app Node.js",
   "author": "User <user@email.com>",
   "version": "1.2.3",
   "private": true,
   "scripts": [
        "start": "node app.js",
        "clean": "rm -rf node_modules",
        "test": "node test.js"
    ],
   "dependencies": {
      "modulo-1": "1.0.0", // Somente será instalado a versão 1.0.0
      "modulo-2": "~1.0.0", // Permite atualizar em nivel de patch (1.0.x)
      "modulo-3": ">=1.0.0" // Permite atualizar para versões maior ou igual a 1.0.0
   },
   "devDependencies": {
      "modulo-4": "*" // Sempre atualizara para a versao mais recente
   }
}
```
