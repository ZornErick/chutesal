package br.mackenzie.chutesal.domain.campeonato.service;

import br.mackenzie.chutesal.domain.campeonato.Campeonato;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CampeonatoServiceImpl implements CampeonatoService {

    @Override
    public List<Campeonato> findAll() {
        return null;
    }

    @Override
    public Campeonato findById(Long id) {
        return null;
    }

    @Override
    public Campeonato create(Campeonato entity) {
        return null;
    }

    @Override
    public Campeonato update(Long id, Campeonato entity) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
