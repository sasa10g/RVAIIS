package rva.reps;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.jpa.Sektor;
import rva.jpa.Radnik;

public interface RadnikRepository extends JpaRepository<Radnik, Integer> {
	Collection<Radnik>findBySektorBean(Sektor sektor);
}