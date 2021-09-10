package models;

import play.db.jpa.GenericModel;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(schema = "gestao_usuarios", name = "cargo")
public class Cargo extends GenericModel implements Serializable
{
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	public int id;

	@Column(name = "nome", nullable = false)
	public String nome;

	public Cargo(String nome) {
		this.nome = nome;
	}
	public Cargo(int id, String nome) {
		this.id = id;
		this.nome = nome;
	}

}
