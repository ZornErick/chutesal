package br.mackenzie.chutesal.domain.inscrito;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InscritoRepo extends JpaRepository<Inscrito, Long> {
}
