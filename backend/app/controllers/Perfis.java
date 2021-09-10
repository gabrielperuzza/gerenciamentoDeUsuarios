package controllers;

import models.Perfil;
import models.Usuario;
import models.beans.CargoVO;
import models.beans.DeletarPerfilVO;

import java.util.List;

public class Perfis extends BaseController {

    public static void adicionarPerfil(Perfil perfil) {

        Perfil perfilNoBanco = Perfil.find("nome = :nome")
                .setParameter("nome", perfil.nome)
                .first();

        if (perfilNoBanco != null) {
            renderText("Perfil já existente");
        }

        perfil.save();

        renderText("Perfil cadastrado com sucesso");

    }

    public static void listarPerfis() {

        List<Perfil> perfis = Perfil.find("order by nome asc").fetch();

        renderJSON(perfis);

    }

    public static void editarPerfil(CargoVO perfilVO) {

        // estou utilizando o CargoVO para nao ter q criar outro VO igual

        Perfil perfilNoBanco = Perfil.find("nome = :nome")
                .setParameter("nome", perfilVO.nome)
                .first();

        if(perfilNoBanco == null) {
            renderText("Perfil inexistente");
        }

        perfilNoBanco.nome = perfilVO.novoNome;

        perfilNoBanco.save();

        renderText("Perfil editado com sucesso");

    }

    public static void deletarPerfil(DeletarPerfilVO deletarPerfilVO) {

        Perfil perfilNoBanco = Perfil.find("id = :id")
                .setParameter("id", deletarPerfilVO.id)
                .first();

        if(perfilNoBanco == null) {
            renderText("Perfil inexistente");
        }

        perfilNoBanco.delete();

        renderText("Perfil deletado com sucesso");

    }

}
