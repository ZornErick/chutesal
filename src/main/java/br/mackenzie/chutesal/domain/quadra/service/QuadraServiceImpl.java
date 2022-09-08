package br.mackenzie.chutesal.domain.quadra.service;

import br.mackenzie.chutesal.domain.quadra.Quadra;
import br.mackenzie.chutesal.domain.quadra.QuadraRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class QuadraServiceImpl implements QuadraService {

    private final QuadraRepo quadraRepo;

    @Autowired
    public QuadraServiceImpl(QuadraRepo quadraRepo) {
        this.quadraRepo = quadraRepo;
    }

    @Override
    public List<Quadra> findAll() {
        return quadraRepo.findAll();
    }

    @Override
    public Quadra findById(Long id) {
        Optional<Quadra> quadra = quadraRepo.findById(id);
        if(quadra.isEmpty()) {
            return null;
        }
        return quadra.get();
    }

    @Override
    public Quadra create(Quadra entity) {
        return null;
    }

    @Override
    public Quadra update(Long id, Quadra entity) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
