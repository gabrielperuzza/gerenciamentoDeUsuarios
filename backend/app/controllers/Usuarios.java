package controllers;

import models.Cargo;
import models.Usuario;
import models.beans.EditarUsuarioVO;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class Usuarios extends BaseController{

    public static void adicionarUsuario(Usuario usuario) {

        Usuario usuarioNoBanco = Usuario.find("cpf = :cpf")
                .setParameter("cpf", usuario.cpf)
                .first();

        if(usuarioNoBanco != null) {
            renderText("Usuário já existente");
        }

        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        Date date = new Date();
        String dataFormatada = formatter.format(date);

        usuario.dataCadastro = dataFormatada;

        usuario.save();

        renderText("Usuário cadastrado com sucesso");

    }

    public static void listarUsuarios() {

        List<Usuario> usuarios = Usuario.findAll();

        renderJSON(usuarios);
    }

    public static void editarUsuario(EditarUsuarioVO editarUsuarioVO) {

        Usuario usuarioNoBanco = Usuario.find("id = :id")
                .setParameter("id", editarUsuarioVO.usuarioAntigo.id)
                .first();

        if(usuarioNoBanco == null){
            renderText("Nenhum usuario foi selecionado");
        }

        Usuario usuarioNovoNoBanco = Usuario.find("cpf = :cpf")
                .setParameter("cpf", editarUsuarioVO.usuarioNovo.cpf)
                .first();

        if(usuarioNovoNoBanco != null) {
            renderText("CPF já cadastrado");
        }

        usuarioNoBanco.delete();

        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        Date date = new Date();
        String dataFormatada = formatter.format(date);

        editarUsuarioVO.usuarioNovo.dataCadastro = dataFormatada;

        editarUsuarioVO.usuarioNovo.save();

    }


}