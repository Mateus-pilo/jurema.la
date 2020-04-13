# Desafio Jurema.la

Resolução do desafio passado pelo Arthur Lima.

### Instalação

1. Clone o repositorio.
```sh
    git clone https://github.com/Mateus-pilo/jurema.la.git
```
3. Instalar NPM packages.
```sh
cd ms-state
npm install

cd ms-population
npm install
```
4. Instalar o Docker no seguinte link:
[docker](https://www.docker.com/).

5. Rodar o arquivo docker-compose.yml com o comando:
```sh 
    docker-compose up
```
6. Aguardar até que suba o container do RabbitMq

7. Sera disponibilazado os seguintes links:
* [http://localhost:5001/states](http://localhost:5001/states).
* [http://localhost:5001/states/:uf](http://localhost:5001/states/:uf).
* [http://localhost:5002/population](http://localhost:5002/population).
* [http://localhost:5002/population/:uf](http://localhost:5002/population/:uf).

8. As querys se encontram na pasta [Query](https://github.com/Mateus-pilo/jurema.la/tree/master/querys).

9. As demais perguntas se encontram na pasta [Others](https://github.com/Mateus-pilo/jurema.la/tree/master/others).

### Técnologias Utilizadas
* [Docker](https://www.docker.com/)
* [Express](https://expressjs.com/pt-br/)
* [RabbitMq](https://www.rabbitmq.com/)
* [Postgres](https://www.postgresql.org/)
* [NodeJs](https://nodejs.org/en/)

### Contato
Mateus Piló Dias - mateus-pilo@hotmail.com

Link do Projeto - [https://github.com/Mateus-pilo/jurema.la](https://github.com/Mateus-pilo/jurema.la)

Whats - (17) 99748-4272