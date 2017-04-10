package rva.jpa;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;


/**
 * The persistent class for the sektor database table.
 * 
 */
@Entity
@NamedQuery(name="Sektor.findAll", query="SELECT s FROM Sektor s")
public class Sektor implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer id;

	private String naziv;

	private String oznaka;

	//bi-directional many-to-one association to Radnik
	@OneToMany(mappedBy="sektorBean")
	@JsonIgnore
	private List<Radnik> radniks;

	//bi-directional many-to-one association to Preduzece
	@ManyToOne
	@JoinColumn(name="preduzece")
	private Preduzece preduzeceBean;

	public Sektor() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNaziv() {
		return this.naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getOznaka() {
		return this.oznaka;
	}

	public void setOznaka(String oznaka) {
		this.oznaka = oznaka;
	}

	public List<Radnik> getRadniks() {
		return this.radniks;
	}

	public void setRadniks(List<Radnik> radniks) {
		this.radniks = radniks;
	}

	public Radnik addRadnik(Radnik radnik) {
		getRadniks().add(radnik);
		radnik.setSektorBean(this);

		return radnik;
	}

	public Radnik removeRadnik(Radnik radnik) {
		getRadniks().remove(radnik);
		radnik.setSektorBean(null);

		return radnik;
	}

	public Preduzece getPreduzeceBean() {
		return this.preduzeceBean;
	}

	public void setPreduzeceBean(Preduzece preduzeceBean) {
		this.preduzeceBean = preduzeceBean;
	}

}