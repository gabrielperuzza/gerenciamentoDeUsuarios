# --- !Ups

CREATE TABLE gestao_usuarios.cargo
(
    id SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE gestao_usuarios.perfil
(
    id SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE gestao_usuarios.usuario
(
    id SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    dataNascimento VARCHAR(50),
    sexo VARCHAR(1),
    cargo INTEGER REFERENCES gestao_usuarios.cargo(id) NOT NULL,
    dataCadastro VARCHAR(50) NOT NULL
);

CREATE TABLE gestao_usuarios.perfis_usuario
(
    id SERIAL NOT NULL PRIMARY KEY,
    usuario INTEGER REFERENCES gestao_usuarios.usuario(id) NOT NULL,
    perfil INTEGER REFERENCES gestao_usuarios.perfil(id) NOT NULL,
    UNIQUE (usuario,perfil)
);

# --- !Downs

DROP TABLE gestao_usuarios.cargo;
DROP TABLE gestao_usuarios.perfil;
DROP TABLE gestao_usuarios.usuario;
DROP TABLE gestao_usuarios.perfis_usuario;