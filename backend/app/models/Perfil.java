package models;

import play.db.jpa.GenericModel;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(schema = "gestao_usuarios", name = "perfil")
public class Perfil extends GenericModel implements Serializable
{
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public int id;

    @Column(name = "nome", nullable = false)
    public String nome;

    public Perfil(String nome) {
        this.nome = nome;
    }
    public Perfil(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }

}
