# Web server com express

Anteriormente criamos um web server usando o módulo http do node.
Podemos usar o módulo Express como uma abstração do módulo http.

Neste módulo vamos entender melhor o funcionamento do express criando um
servidor web.

## Configurando um servidor WEB

Nesse livro é necessário instalar um módulo chamado express-generator,
globalmente para podermos gerar o express.

### npm start

O comando npm start executa um comando pre-configurado no arquivo package.json.

## Estrutura da aplicação

O gerador do express traz uma série de recutrsos já configurados para um 
servidor web executar.

## Pasta bin, public e routes views

- Pasta bin: deve ser excluidas pois removemos o arquivo www que tinha dentro
dela
- Pasta public: deve conter os assets da aplicação (css, js e imagens)
- Pasta routes: armazena os arquivos de definição de rodas
- Pasta views contém todos os arquivos de definição de páginas web da aplicação.
Esses arquivos armazenam as estruturas html do projeto e podem ser tratados por
diversos template engines, assunto de próximos capítulo do livro.

### Routes

O sistema de rotas define o que vai ser executado para cada chamada http.
Uma rota define as regras de acesso a aplicação, a partir de uma URI
(uniform resource identifier). É a partir dela. por exemplo que é definido o
conteúdo de retorno do servidor para o endereço localhost:3000.
