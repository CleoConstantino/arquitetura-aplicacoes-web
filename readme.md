# Pós graduação em desenvolvimento full stack de sistemas modernos para nuvem

## Aula de introdução a arquitetura de aplicações web

*Resumo:*

Conhecimentos adquiridos: atribuições de um arquiteto de software, caracteristicas de arquitetura de desenvolvimento de um sistema e estilos de arquitetura.

Criado uma aplicação MVP do zero onde a stack utilizada foi MERN (Mongo, Express, React, Node):
![Design sem nome (1)](https://user-images.githubusercontent.com/59203960/186193286-1a2b8d51-6ac4-402b-ae8f-ccf86c523ae2.png)

-   criado um Cluster no MongoDB;
-   realizado instalação e configuração do NodeJS;
-   o editor utilizado foi o Visual Studio;
-   utilizado o git para versionar o código que foi escrito;
-   instalado o Express como uma dependência;
-   configurado o drive de conexão do MongoDB;
-   realizado conexão com o Cluster do MongoBD;
-   instalado e configurado o React;
-   instalado o CORS como dependência;
-   realizado a conexão do frontend com o backend;
-   realizado conexão do backend com o banco de dados;

## **Atribuições de um arquiteto de software**

-   Tomar decisões de arquitetura;
-   Analisar de forma contínua a arquitetura;
-   Manter-se atualizado com as útimas tendências - Técnica dos 20 min (ler sobre algo diferente, cases, tecnologias, para aprender algo diferente - "abrir a cabeça").;
-   Garantir que as decisões são seguidas;
-   Diversificar conhecimento;
-   Ter conhecimento da lógica de negócio;
-   Possuir habilidades interpessoais;
-   Entender e navegar em politica;

Caracteristicas que devem ser levadas em consideração quando pensamos na arquiterura de desenvolvimento de um sistema:

-   Availability;
-   Reliability;
-   Testability;
-   Scalability;
-   Security;
-   Agility;
-   Faul tolerance;
-   Elasticity;
-   Recoverability;
-   Performance;
-   Deployability;
-   Learnability;

## **Estilos de arquitetura**

**Monólito ou monolito:**  se refere ao tipo de implantação (Deploy único). Tem uma implantação só, é necessário utilizar uma aplicação só. Aguns que utilizam: StackOverFlow, ShopFy, BasiCamp. Complexidade menor, tem uma aplicação única. Não é sinônimo de uma aplicação ruim.

**Distribuido:**  tem implantações separadas, em momentos diferente, não precisam acontecer ao mesmo tempo, não precisam depender entre si. Trás uma complexidade maior. Ao utilizar arquiteturas distribuidas, é melhor automatizar ao máximo a implantação e para que possa facilitar a aplicação.

## **Exemplos de arquitetura:**

*Arquitetura em camadas:* Apresentação/Negócio/Banco de dados;

*Microserviços:* distribui em vários pedacinhos. É uma arquitetura de estilo distribuido, pois a implantação é feita de forma separada;

## Stack MERN (Mongo > Express.JS > React.JS > Node.JS)
![mern-1232x705-1-1024x586-1](https://user-images.githubusercontent.com/59203960/186192918-ae41e61a-dbfd-44c2-9b7d-ee596fea5be6.jpeg)


**Introdução ao Mongo DB:**  é banco de dados orientado a documentos, não é uma estrutura de tabelas igual o PostgreSQL ou MySQL. É um banco de dados escalável, é pago mas tem um plano gratuito. Cada informação registrada no banco de dados é um documento, e é similar ao á objetos JSON (JavaScript Object Notation).  Comparando com um banco de dados relacional que possui 'tabelas', no banco de dados não relacional, ele possui 'documentos'. Tem uma estrutura de escalabilidade e elasticidade, tem um ferramental de monitoramento e alertas. O Cluster é um conjunto de máquinas que vai funcionar como nosso banco de dados.

**Introdução ao NodeJS:**  dentro do Node tem o 'npm'(node package manager) que é o gerenciador de pacotes do Node, é possivel instalar várias bibliotecas/dependencias, podem acelerar o processo de criação da aplicação

Quando se trabalha com microserviços é possivel trabalhar com versões do Node diferentes e quando precisar fazer alguma atualização é possível ter isso mais encapsulado e não corre tanto risco de quebrar o código.

Diferente do que pode ocorrer com o monolito, poder ter Breanking Change (mudança de ruptura) pode ter modificações nessa biblioteca/dependências que quebram o funcionamento em relação as versões anteriores, tem que ter o cuidado de quando atualizar uma dependência, verificar todos os lugares onde aquela dependência está sendo utilizada corre o risco de quebrar o código.

É um responsabilidade do arquiteto verificar se as dependências estão sendo atualizadas e garantir que essas atualizações não vão quebrar a aplicação. É muito bom ter testes automatizados que garantem o comportamento da aplicação mesmo quando modifica ou altera uma funcionalidade.

**Introdução ao Express:**  será utilizado o Express em cima do Node. É um framework para desenvolvimento de aplicações web. O 'npm' vai ajudar a instalar uma das ferramentas que vai facilitar o desenvolvimento web utilizando o Express (Back End - lado servidor da aplicação). O Express é muito bom em desenvolver API's também pois precisamos de uma forma para se comunicar com a camada client/frontend, e a melhor forma é utilizando API (tipos de API: REST, GRAPH > formas que tem para se comunicar com o servidor (backend));

**Introdução do React:** é a tecnologia utilizada para criar a camada do frontend e amplamente utilizado no mercado de trabalho. Trabalha com o conceito de **SPA** (Single Page Applications) são aplicações cuja funcionalidade está concentrada em uma única página. Ao invés de recarregar toda a página ou redirecionar o usuário para uma página nova, apenas o conteúdo principal é atualizado de forma assíncrona, mantendo toda a estrutura da página estática. 

## Configurando o ambiente:

1º passo > MongoDB: criar uma conta no MongoDB e após configurar e criar o primeiro Cluster, adicionado o edereçode IP na lista de acessos.

2º passo > intalar o NodeJS. Link [aqui](https://nodejs.org/pt-br/) > (LTS é a versão mais estável): realizado instalação do NodeJS 16.16.0. e automaticamente já instala o npm junto.
Comandos no terminal para verificar a versão do node e do npm:

    node -v
    npm -v

3° passo > Instalar o VS Code. Link [aqui](https://code.visualstudio.com/). E abrir a ferramenta do Visual Studio Code.

4º passo > criar a pasta/estrutura da aplicação: dentro do VS Code, abrir o terminal e entrar na pasta desejada para criar essa estrutura, exemplo > Desktop. E seguir com os comandos:

    mkdir tiered_app >> para criar a pasta
    cd tiered_app >> para navegar dentro da pasta
    mkdir server >> para criar a pasta de servidor
    cd server >> para navegar dentro da pasta
    type null server.js >> para criar o arquivo no windows
    touch server.js >> para criar o arquivo no linux
   
    
Abrir a pasta 'tiered_app' (criado anteriormente) no VS Code e abrir o arquivo server.js

5º passo > construir o primeiro Hello Word. Inserir o código abaixo no arquivo server.js:
```
const  http = require('http');     
const  hostname = '127.0.0.1';
const  port = 3000;

const  server = http.createServer((_,res) => {
    res.end('Hello Node');
});

server.listen(3000, '127.0.0.1');
```
Digitar no terminal:

    node server.js >> para executar a aplicação

Ao abrir o navegardor web, digitar: 127.0.0.1:3000 e vai aparecer 'Hello Node'.

> Este é o menor servidor Node que a gente pode criar!!

**Comandos utilizados no terminal:**

    cd.. >> para voltar a pasta anterior
    git init >> para inicializar o git e versionar o código
    ls >> verificar o conteúdo da pasta
    clear >> limpa a tela do terminal
    git status >> mostra o status
    git add . >> para inserir no git
    git commit -m "texto" >> comitar uma alteração
    git log --oneline >> verificar o retorno do log
        

A cada modificação deve ser feito um 'commit' para ficar registrado e documentado cada alteração.

**Configuração do Express:**  o Express vai rodar "em cima" do Node, vamos utilizar o npm para instalar o Express. No terminal entrar na pasta server e instalar o arquivo package.json: (link da documentação [aqui](http://expressjs.com/en/starter/hello-world.html)!)

    npm init -y >> esta 'flag' (-y) vai dar ok para toda a instalação, é o comando que vai criar o arquivo package.json
    rm package.json >> remove o arquivo
    npm install express >> vai instalar os pacotes do express

Inserir o código abaixo na pasta server.js (sobrescrever o código inserido anteriormente):

    const express = require('express');
    const server = express();
    
    server.get('/', (_, res) => {
	    res.send('Hello World!');
    });
    
    server.listen(3001);
  
> Esta é uma versão mais simples de um servidor em Express rodando em cima do Node.

**Configurar o Drive no Mongo:**  Por padrão o Node não vem nada configurado para se conectar com banco de dados Mongo, existem ferramentas prontas para fazermos essa conexão. O driver oficial do MongoDB Node.js permite que aplicativos Node.js se conectem ao MongoDB e trabalhem com dados. O driver possui uma API assíncrona que permite interagir com o MongoDB usando Promises ou por meio de callbacks tradicionais -  Link da documentação [aqui](https://mongodb.github.io/node-mongodb-native/). 

Executar o comando no terminal:

```
npm install mongodb
```
Fazer o login na conta do  [MongoDB](https://account.mongodb.com/account/login)  e clicar em 'Connect' > selecionar a conexão com aplicação > passo 1: selecionar o Driver e a Versão > passo 2: selecionar o código completo, copiar o código disponibilizado na configuração *prestar atenção pois tem que incluir a senha no código para acesso.

No terminal, dentro da pasta server, criar um arquivo mongo.js:

    touch mongo.js
    type null mongo.js >> para criar o arquivo no windows

Abrir esse arquivo e inserir o código copiado... ***lembrar de mudar o password*
Para executar o arquivo mongo.js:

    node mongo.js
    

Para verificar se está executando corretamente: entrar na conta do MongoDB > acessar o Cluster criado > ir na aba Collections > onde vai ter um Collection 'devices' > e vai ter um documento que tem o _id que foi gerado automaticamente, e o cumprimento 'Hello Mongo'.

*Obs:* a **uri** (string de conexão) está escrita no código, mas essa não é uma boa abordagem para estar se utilizando parâmetros sensíveis (usuário e senha são informações sensíveis), não se deve ter esse tipo de informação dentro do código. Uma boa prática seria utilizar um dependência chamada .env (DotEnv) -> arquivo de configuração de ambiente.

**Configurando o React:**

Site da documentação [aqui.](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)

No terminal, entrar na pasta 'tiered_app', e inserrir o comando abaixo:

```
npx create-react-app client
cd client
npm start
```
> Ao startar a aplicação, vai abrir o navegador automaticamente e mostrar rodando a aplicação em React.

## Conectando o frontend com o backend

Incluido no arquivo 'App.js' o código 'useEffect' e instalado a 'politica de cors' como uma deêpendência para permitir o acesso:

No arquivo server.js, dar o comando abaixo: (instalar o cors) 

    npm install cors

Código no arquivo 'App.js':

    import React, { useState, useEffect } from  'react';
    import logo from  './logo.svg';
    import  './App.css';
    
    function  App() {
    const [greeting, setGreeting] =  useState([]);
    	async  function  fetchGreeting() {
    	const response =  await  fetch('http://localhost:3001/');
    	setGreeting(await response.json());
    }
    
    useEffect(() => {
    	fetchGreeting();
    }, [greeting]);
    
    return (
    
    	<div  className="App">
    		<header  className="App-header">
    			<img  src={logo}  className="App-logo"  alt="logo"  />
    			<p>
    			{greeting} + React
    			</p>
    		</header>
    	</div>
    	);
    }
    export  default App;

Importa o 'cors' no arquivo 'server.js':

    const express =  require('express');
    const cors =  require('cors');
    const server =  express();
    
    server.use(cors());
    server.get('/', (_, res) => {
    	res.json('Hello Express!');
    });
    server.listen(3001);

Para dar o start na aplicação na parte do servidor e na parte do cliente, fazer o seguinte: abrir dois terminais: um acessar a pasta server e no outr a pasta client e em cada um deles dar o comando 'npm start', esse comando vai rodar a aplicação em cada camada.
## Conectando backend com o banco de dados

Ajustar o arquivo mongo.js:

    const { MongoClient, ServerApiVersion } =  require('mongodb');
    const uri = 				
    	"mongodb+srv://usuario_database:YNsbORZulGo54Ruc@firstcluster.6q2t1mj.mongodb.net/?retryWrites=true&w=majority";
    
    const client =  new  MongoClient(uri);
    
    var collection;
    
    module.exports  = {
    	connect: () => {
    		client.connect(err  => {
    			if(err) {
    				console.log(err);
    				return;
    			}
    			collection = client.db("test").collection("devices");
    		});
    	},
    	collection: () => {
    		return collection;
    	},
    };

E importar o mongo no arquivo server.js:

    const express =  require('express');
    const cors =  require('cors');
    const mongo =  require('./mongo');
    
    const server =  express();
    server.use(cors());
    
    server.get('/', (_, res) => {
    	mongo
    		.collection()
    		.findOne({ greeting:  'Hello Mongo' })
    		.then((doc) => res.json(`${doc.greeting} + Express!`));
    	});
    
    server.listen(3001, () => {
    	console.log('Server running on port 3001');
    	mongo.connect();
    });


## Esta aplicação utiliza uma arquitetura em camadas, divida em:  _Client, Server, Database._

**Client (Apresentação/WEB > ReactJS):**  camada de FrontEnd, parte que vai rodar no navegador do usuário, vai ver e interagir com nossa aplicação.

**Server (Negócio/Express.JS/Node.JS):**  camada de servidor, camada de BackEnd, lógica de negócio, trabalhar com dados, ter regras de negócio e responável por conectar com o banco de dados.

**Database (Banco de dados/Database >MongoDB):**  camada de banco de dados.
