# Pos Mecanica - Backend
### Estrutura de Diretórios

    -> src
	    -> controllers
	    -> database
        -> migrations
        -> seeds
      -> mail
	    -> middlewares
	    -> models
      -> routes
	    -> screens
	    -> utils
	    -> validators

**-> src**
* Pasta onde ficará código criado por nós, sendo ele dividido da seguinte forma:
	**-> controllers**
	* Pasta em que ficarão os controllers definidos para a aplicação. Cada entidade de dados definida deve ter um controller próprio, capaz de realizar a sua função. Não somente as entidades possuem controllers, mas também as tabelas relacionais destas próprias entidades. Um controller é responsável por organizar as informações recebidas da rota e se comunicar com os diferentes models e tabelas necessárias para realizar aquela ação (ex.: uma função de getAll em um ProfessorController precisa se comunicar com o ProfessorModel, para obter as informações do professor, mas precisa também pegar também através do RelationsModel informações de outras entidades que estejam vinculadas a este professor), para então organizar a resposta a ser dada.
	* Cada controller consiste em um conjunto de funções a ser realizadas para aquela entidade.

	**-> database**
	* Pasta em que é configurado o banco de dados, com auxílio do Knex. Os arquivos knexfile.js (não dentro da pasta database) e connection.js configuram a conexão com o banco de dados. O banco de dados usado para desenvolvimento é o postgres, sendo este hospedado por um servidor externop ao projeto. Ainda há as pastas que se seguem:
		**-> migrations**
		* Pasta em que guardamos as migrations, isto é, as instruções para criar, editar e deletar as colunas de cada uma das tabelas (os campos que cada tabela tem). São importantes para conseguirmos desconstruir e reconstruir o nosso banco de dados de acordo com a necessidade.
		* Para criar uma nova migration, usamos o comando `npx knex migrate:make nome_da_migration_aqui` e editamos o arquivo criado. É MUITO IMPORTANTE que a função "down" desfaça TUDO o que a função "up" fez. Se "up" adicionou colunas, "down" deve removê-las. Se criou uma tabela, "down" deve destruir essa tabela.
		* Para rodar as migrations e aplicar as suas alterações, deve-se rodar o comando `npx knex migrate:latest`.
		**-> seeds**
		* Pasta em que guardamos as seeds, isto é, os dados iniciais com os quais queremos preencher as linhas da tabela. São úteis para que tenhamos dados para teste de fácil acesso ainda que precisemos destruir parte do banco de dados.
		* Para criar uma nova seed, usamos o comando `npx knex seed:make nome_da_migration_aqui` e editamos o arquivo criado. 
		* Para rodar as seeds e aplicar os seus dados, deve-se rodar o comando `npx knex seed:run`.

  **-> mail**
  * Pasta onde fica componentizada toda a configuração de envio de emails que porventura venhamos precisar enviar para os usuários da aplicação, assim como os seus respectivos conteúdos.
  
  **-> middlewares**
  * Pasta onde ficam os arquivos de autenticação dos usuários, para autorizar ou não a execução de determinadas funções a depender do usuário que esteja realizando estas.
  
	**-> models**
	* Pasta em que definiremos os models da aplicação. Os models são aqueles que interagem em mais baixo nível com as entidades de dados que temos na aplicação. São eles os responsáveis por buscar dados em uma tabela, inserir dados em uma tabela, etc. No caso, precisamos de um model para cada entidade do banco de dados (administrador, estudante, professor, qualificação ...), fora o Model de relacionamento que foi criado para conseguir atender a todas as tabelas relacionais do projeto.

	**-> routes**
	* Pasta em que onde fica toda a parte de rotas do sistema, onde cada uma dessas realiza uma função específica quando "disparada", caso consiga ser "aprovada" por todos os middlewares. Esta parte também está dividida por entidades por motivos de organização, sendo que dentro destas pastas internas há o arquivo principal com o código executável, como também um arquivo doc que contém toda a parte da documentação específica de cada entidade que foi criada a partir do Swagger.

	**-> utils**
	* Pasta em que colocaremos os arquivos auxiliares e que podem precisar ser acessados por diversos outros. Por exemplo, é onde armazenamos todas as funções do firebase de autenticação que usamos dentro da aplicação e também do firestore, ferramenta usada para armazenamento de arquivos.
	
	**-> validators**
	* Pasta onde fica toda a parte de validação dos dados passados nas rotas, servindo de controle destes afim de fazer com que o usuário consiga enviar informações que não correspondam com a que de fato está sendo esperada. A ferramenta de criação desses 'validators' foi o celebrate e esses são chamados como middleware nas rotas do sistema.
	
### Ferramentas utilizadas
* [Firebase](https://firebase.google.com/docs/ "Firebase") -> Usado para a autenticação e para armazenamento de arquivos.
* [Knex](http://knexjs.org/ "Knex") -> SQL Query builder utilizado no projeto, tanto para criar o banco de dados com migrations quanto para rodar queries de adição, busca, etc.
* [Swagger](https://www.npmjs.com/package/swagger-jsdoc "Swagger") -> Ferramenta de documentação de api utilizada para registrar os parâmetros das rotas.
* [ESLint](https://eslint.org/docs/user-guide/getting-started "ESLint") -> Ferramenta utilizada para padronização do código e do estilo aplicados.
* [DotEnv](https://www.npmjs.com/package/dotenv "DotEnv") -> Ferramenta de armazenamento de variáveis sensíveis, fazendo estas não irem para o git.
* [Nodemailer](https://nodemailer.com/about/ "Nodemailer") -> Ferramenta utilizada para envio de emails.
* [Celebrate](https://www.npmjs.com/package/celebrate "Celebrate") -> Ferramenta utilizada para validação dos dados passados pelo usuário.
* [UUID](https://www.npmjs.com/package/uuid "UUID") -> Ferramenta utilizada para a geração de strings randômicas que servirão como id para o usuário. 

[Diagrama UML](https://lucid.app/lucidchart/098b980f-81f2-408c-b813-feb4c8c0a8ab/edit?useCachedRole=false&shared=true&page=0_0#)

### Documentação
* Para a documentação deste projeto, foi utilizado o Swagger, uma linguagem de descrição que facilita a documentação de rotas em uma API RESTful. Para, foi criado um servidor express em Node, que roda na porta *3333*, diferentemente do projeto principal, que roda na porta 3000. Para acessar o Swagger desse projeto, basta colocar o servidor para rodar e acessar o seguinte link: (http://localhost:3333/api-docs/#/).

* Dessa maneira, para a documentação das rotas das diferentes entidas, foi criada, uma pasta chamada **doc** dentro da pasta de cada entidade situadas na pasta **routes**, que segue o padrão definido logo abaixo:
```
-> src
	-> routes
		-> entidade1
			-> entidade1Doc
        -> config.js
				-> rotaPost.js
				-> rotaGet.js
				-> ...
			-> index.js
		-> entidade2
			-> entidade2Doc
        -> config.js
				-> rotaUpdate.js
				-> rotaDelete.js
				-> ...
			-> index.js
		-> ...
```
* Analisando o trecho acima, é possível notar que dentro de cada entidade haverá a presença de uma pasta que guardará toda a documentação de suas respectivas rotas. Havendo dentro dessa pasta a espicificação de cada rota detalhadamente como também a descrição de uma arquivo mais geral chamado **config.js**, falando mais sobre a entidade selecionada. Da mesma forma, na pasta da entidade vai ter a presença de um arquivo **index.js**, que terá todo o código executável daquela entidade referenciada.

![Captura de tela 2021-06-06 173155](https://user-images.githubusercontent.com/64047143/120939208-414c4b80-c6ed-11eb-84a8-b8f043de05b7.png)
_Documentação do projeto no Swagger_

* Por fim, caso queira ver de maneira detalhada uma rota, basta clicar sobre ela e observar as informações que aparecerão abaixo desta:
![Captura de tela 2021-06-06 173456](https://user-images.githubusercontent.com/64047143/120939256-92f4d600-c6ed-11eb-80c9-806bc747dd1f.png)
 _Exemplo de documentação da rota Post que cria administradores no sistema_
