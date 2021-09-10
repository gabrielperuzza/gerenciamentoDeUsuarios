-- noinspection SqlNoDataSourceInspectionForFile

CREATE DATABASE gerenciamento_de_usuario ENCODING='UTF8';

CREATE ROLE gerenciamento_de_usuario LOGIN
    ENCRYPTED PASSWORD 'gerenciamento_de_usuario'
    SUPERUSER INHERIT NOCREATEDB NOCREATEROLE;

DROP SCHEMA IF EXISTS gestao_usuarios CASCADE;

CREATE SCHEMA gestao_usuarios;
