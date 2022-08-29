package br.mackenzie.chutesal.unidade;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UnidadeRepo extends JpaRepository<Unidade, Long> {
}
