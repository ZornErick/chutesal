package br.mackenzie.chutesal.campeonato;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CampeonatoRepo extends JpaRepository<Campeonato, Long> {
}
