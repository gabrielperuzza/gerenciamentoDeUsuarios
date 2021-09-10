package models;

import play.db.jpa.GenericModel;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
@Table(schema = "gestao_usuarios", name = "usuario")
public class Usuario extends GenericModel implements Serializable {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public int id;

    @Column(name = "nome", nullable = false)
    public String nome;

    @Column(name = "cpf", nullable = false)
    public String cpf;

    @Column(name = "dataNascimento")
    public String dataNascimento;

    @Column(name = "sexo")
    public String sexo;

    @ManyToOne
    @JoinColumn(name = "cargo")
    public Cargo cargo;

    @ManyToMany
    @JoinTable(
            name = "gestao_usuarios.perfis_usuario",
            joinColumns = @JoinColumn(name = "usuario"),
            inverseJoinColumns = @JoinColumn(name = "perfil")
    )
    private Set<Perfil> perfis;

    @Column(name = "dataCadastro", nullable = false)
    public String dataCadastro;

    public Usuario(String nome, String cpf, String dataNascimento, String sexo, Cargo cargo, Set<Perfil> perfis) {

        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.cargo = cargo;
        this.perfis = perfis;

    }



}
