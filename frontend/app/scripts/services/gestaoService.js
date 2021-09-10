(function() {

    'use strict';

    angular
        .module('appModule')
        .service('gestaoService', function(request) {

            this.adicionarCargo = function(nome) {

                var cargo = {
                    nome: nome
                };

                return request.post("/cargos/adicionar", cargo);

            };

            this.listarCargos = function() {
                return request.post("/cargos/listar");
            };

            this.editarCargo = function(nome, novoNome) {

                var cargoVO = {
                    nome: nome,
                    novoNome: novoNome
                };

                return request.post("/cargos/editar", cargoVO);
            };

            this.adicionarPerfil = function(nome) {

                var perfil = {
                    nome: nome
                };

                return request.post("/perfis/adicionar", perfil);

            };

            this.listarPerfis = function() {
                return request.post("/perfis/listar");
            };

            this.editarPerfil = function(nome, novoNome) {

                var perfilVO = {
                    nome: nome,
                    novoNome: novoNome
                };

                return request.post("/perfis/editar", perfilVO);
            };

            this.deletarPerfil = function(id) {

                var deletarPerfilVO = {
                    id: id
                };

                return request.post("/perfis/deletar", deletarPerfilVO);
            };

            this.adicionarUsuario = function(nome, cpf, dataNascimento, sexo, cargo, perfis) {

                var usuario = {
                    nome: nome,
                    cpf: cpf,
                    dataNascimento: dataNascimento,
                    sexo: sexo,
                    cargo: cargo,
                    perfis: perfis
                };

                return request.post("/usuarios/adicionar", usuario);

            };

            this.listarUsuarios = function() {
                return request.post("/usuarios/listar");
            };

            this.editarUsuario = function(usuarioAntigo, nome, cpf, dataNascimento, sexo, cargo, perfis) {

                var usuarioNovo = {
                    nome: nome,
                    cpf: cpf,
                    dataNascimento: dataNascimento,
                    sexo: sexo,
                    cargo: cargo,
                    perfis: perfis
                };
                var editarUsuarioVO = {
                    usuarioAntigo: usuarioAntigo,
                    usuarioNovo: usuarioNovo
                };

                return request.post("/usuarios/editar", editarUsuarioVO);

            };

        });
})();

