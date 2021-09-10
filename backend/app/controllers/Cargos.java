package controllers;

import models.Cargo;
import models.beans.CargoVO;

import java.util.List;

public class Cargos extends BaseController {

    public static void adicionarCargo(Cargo cargo) {

        Cargo cargoNoBanco = Cargo.find("nome = :nome")
                .setParameter("nome", cargo.nome)
                .first();

        if (cargoNoBanco != null) {
            renderText("Cargo já existente");
        }

        cargo.save();

        renderText("Cargo cadastrado com sucesso");

    }

    public static void listarCargos() {

        List<Cargo> cargos = Cargo.findAll();

        renderJSON(cargos);

    }

    public static void editarCargo(CargoVO cargoVO) {

        Cargo cargoNoBanco = Cargo.find("nome = :nome")
                .setParameter("nome", cargoVO.nome)
                .first();

        Cargo novoCargoNoBanco = Cargo.find("nome = :nome")
                .setParameter("nome", cargoVO.nome)
                .first();

        if(cargoNoBanco == null) {
            renderText("Cargo inexistente");
        }
        if(novoCargoNoBanco != null) {
            renderText("Já existe um cargo com esse nome");
        }

        cargoNoBanco.nome = cargoVO.novoNome;


        cargoNoBanco.save();

        renderText("Cargo editado com sucesso");

    }

}
