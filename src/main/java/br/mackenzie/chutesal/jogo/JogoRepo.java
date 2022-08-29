package br.mackenzie.chutesal.jogo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JogoRepo extends JpaRepository<Jogo, Long> {
}
