package br.mackenzie.chutesal.quadra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuadraRepo extends JpaRepository<Quadra, Long> {
}
