
# Gerenciamento de Usuário

## Tecnologias

- [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- [Pgadmin 4](https://www.pgadmin.org/download/pgadmin-4-windows/)
- [Java 8](https://www.oracle.com/br/java/technologies/javase/javase-jdk8-downloads.html)
- [IntelliJ Idea](https://www.jetbrains.com/pt-br/idea/download/)
- [PlayFramework 1.5.x](https://github.com/playframework/play1/tree/1.5.3)
- [NodeJS 14.15.1](https://nodejs.org/en/download/)
- [Grunt 0.4.5](https://www.npmjs.com/package/grunt)
- [Bower 1.8.8](https://www.npmjs.com/package/bower)

## Configuração

### Executar na pasta frontend

#### Npm
Tente executar `npm`. Caso não consiga, faça o download nos links da seção anterior.

#### Grunt
Tente executar `grunt`. Caso não consiga, execute:
- `npm i -g grunt`

#### Bower
Tente executar `bower`. Caso não consiga, execute:
- `npm i -g bower`

#### Comandos obrigatórios
- `npm install`

### Configurar banco de dados

- Executar evolution backend/db/evolutions/_00.sql
- Após criar o database e role da evolution, entrar no database criado para criar o schema

### Executar na pasta backend

#### Comandos obrigatórios

- `play deps`
- `play evolutions`
- `play evolutions:apply`

### Configuração do servidor de aplicação no Intellij

- `play idea` (pasta backend)
- play.server.Server
- -Dapplication.path=.

## Execução

### Frontend
- `grunt`

### Backend
- `play run` (ou rodar o servidor configurado)