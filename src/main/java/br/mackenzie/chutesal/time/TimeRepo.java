package br.mackenzie.chutesal.time;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeRepo extends JpaRepository<Time, Long> {
}
