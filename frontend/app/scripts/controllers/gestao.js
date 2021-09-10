(function() {

    'use strict';

    angular
        .module('appModule')
        .controller('gestaoController', function($scope, $window, gestaoService, $rootScope) {

            $scope.init = function() {

                $scope.resultado = null;

                $scope.listaCargos = [];
                $scope.nomeCargo = null;

                $scope.listaPerfisOrdenada = [];
                $scope.nomePerfil = null;

                $scope.cargoSelecionado = null;
                $scope.novoNomeCargo = null;

                $scope.perfilSelecionado = null;
                $scope.novoNomePerfil = null;

                $scope.nomeUsuario = null;
                $scope.cpfUsuario = null;
                $scope.dataNascimentoUsuario = null;
                $scope.sexoUsuario = null;
                $scope.cargoUsuario = null;
                $scope.perfisUsuario = [];

                $scope.listaUsuarios = [];
                $scope.usuarioCompleto = null;
                $scope.usuarioEscolhido = false;

                $scope.sexos = ['M', 'F'];

                $scope.cargosBuscados = false;
                $scope.perfisBuscados = false;
                $scope.usuariosBuscados = false;

                $scope.novoNomeUsuario = null;
                $scope.novoCpfUsuario = null;
                $scope.novoDataNascimentoUsuario = null;
                $scope.novoSexoUsuario = null;
                $scope.novoCargoUsuario = null;
                $scope.novoPerfisUsuario = [];

                $scope.listarCargos();
                $scope.listarPerfis();
                $scope.listarUsuarios();



            };

            $scope.listarCargos = function() {

                gestaoService.listarCargos()
                    .success(function (result) {
                        $scope.listaCargos = result;
                        $scope.cargosBuscados = true;
                    });

            };

            $scope.adicionarCargo = function() {

                gestaoService.adicionarCargo($scope.nomeCargo)
                    .success(function (result) {
                        $scope.resultado = result;
                        $scope.listarCargos();
                    })
                    .error(function(result) {
                        $scope.resultado = result;
                    }
                )
                    .finally(function () {
                        $("#modalCargos").modal("toggle");
                    }
                );

            };

            $scope.editarCargo = function() {

                gestaoService.editarCargo($scope.cargoSelecionado, $scope.novoNomeCargo)
                    .success(function (result) {
                        $scope.resultado = result;
                        $scope.listarCargos();
                    })
                    .error(function(result) {
                        $scope.resultado = result;
                    }
                )
                    .finally(function () {
                        $("#modalCargos").modal("toggle");
                    }
                );
                
            };
            

            $scope.listarPerfis = function() {

                gestaoService.listarPerfis()
                    .success(function (result) {

                        $scope.listaPerfisOrdenada = result;
                        $scope.perfisBuscados = true;


                    });

            };

            $scope.adicionarPerfil = function() {

                gestaoService.adicionarPerfil($scope.nomePerfil)
                    .success(function (result) {
                        $scope.resultado = result;
                        $scope.listarPerfis();
                    })
                    .error(function(result) {
                        $scope.resultado = result;
                    }
                )
                    .finally(function () {
                        $("#modalPerfis").modal("toggle");
                    }
                );

            };

            $scope.editarPerfil = function() {

                gestaoService.editarPerfil($scope.perfilSelecionado, $scope.novoNomePerfil)
                    .success(function (result) {
                        $scope.resultado = result;
                        $scope.listarPerfis();
                    })
                    .error(function(result) {
                        $scope.resultado = result;
                    }
                )
                    .finally(function () {
                        $("#modalPerfis").modal("toggle");
                    }
                );
                
            };

            $scope.deletarPerfil = function(id) {

                gestaoService.deletarPerfil(id)
                    .success(function (result) {
                        $scope.resultado = result;
                        $scope.listarPerfis();
                    })
                    .error(function(result) {
                        $scope.resultado = result;
                    }
                )
                    .finally(function () {
                        $("#modalPerfis").modal("toggle");
                    }
                );

            };

            $scope.adicionarUsuario = function() {

                var cargoCompleto;

                $scope.listaCargos.forEach(cargo => {
                    if(cargo.nome === $scope.cargoUsuario) {
                        cargoCompleto = cargo;
                    }
                });

                var dataFormatada = formatDate($scope.dataNascimentoUsuario);

                
                gestaoService.adicionarUsuario($scope.nomeUsuario, $scope.cpfUsuario, dataFormatada, $scope.sexoUsuario, cargoCompleto, $scope.perfisUsuario)
                    .success(function (result) {
                        $scope.resultado = result;
                        $scope.listarUsuarios();
                    })
                    .error(function(result) {
                        $scope.resultado = result;
                    }
                )
                    .finally(function () {
                        $("#modalUsuarios").modal("toggle");
                    }
                );
            };

            $scope.listarUsuarios = function() {
                gestaoService.listarUsuarios()
                    .success(function (result) {
                        $scope.listaUsuarios = result;
                        $scope.usuariosBuscados = true;
                    });
            };

            $scope.editarUsuario = function() {

                var cargoCompleto;

                $scope.listaCargos.forEach(cargo => {
                    if(cargo.nome === $scope.novoCargoUsuario) {
                        cargoCompleto = cargo;
                    }
                });

                var dataFormatada = formatDate($scope.novoDataNascimentoUsuario);


                gestaoService.editarUsuario($scope.usuarioCompleto, $scope.novoNomeUsuario, $scope.novoCpfUsuario, dataFormatada, $scope.novoSexoUsuario, cargoCompleto, $scope.novoPerfisUsuario)
                    .success(function (result) {
                        $scope.listaUsuarios = result;
                        $scope.listarUsuarios();
                        $scope.usuarioEscolhido = null;
                    })
                    .error(function(result) {
                        $scope.resultado = result;
                    }
                )
                    .finally(function () {
                        $("#modalUsuarios").modal("toggle");
                    }
                );

            };

            $scope.escolherEditarUsuario = function(id) {

                $scope.listaUsuarios.forEach(usuario => {
                    if(usuario.id === id) {
                        $scope.usuarioCompleto = usuario;
                    }
                });

                $scope.usuarioEscolhido = true;

            };

            $scope.addPerfilUsuario = function(perfil, info) {

                var removido = false;
                var lista;

                if(info === 'editar') {
                    lista = $scope.novoPerfisUsuario;
                }
                if(info === 'adicionar'){
                    lista = $scope.perfisUsuario;
                }

                lista.forEach(perfilUsuario => {
                    if(perfilUsuario == perfil){
                        var index = lista.indexOf(perfil);
                        lista.splice(index, 1);
                        removido = true;
                    }
                });
                if(!removido) {
                    lista.push(perfil);
                }
            };

            function formatDate(date) {
                 
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();
            
                if (month.length < 2) {
                    month = '0' + month;
                }

                if (day.length < 2) {
                    day = '0' + day;
                }

                return [day, month, year].join('/');
            }

            $scope.init();

        });
}());