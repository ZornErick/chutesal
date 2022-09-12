package br.mackenzie.chutesal.domain.unidade.service;

import br.mackenzie.chutesal.domain.campeonato.Campeonato;
import br.mackenzie.chutesal.domain.campeonato.CampeonatoRepo;
import br.mackenzie.chutesal.domain.quadra.Quadra;
import br.mackenzie.chutesal.domain.quadra.QuadraRepo;
import br.mackenzie.chutesal.domain.unidade.Unidade;
import br.mackenzie.chutesal.domain.unidade.UnidadeForm;
import br.mackenzie.chutesal.domain.unidade.UnidadeRepo;
import br.mackenzie.chutesal.domain.unidade.UnidadeUpdateForm;
import br.mackenzie.chutesal.util.crud.Form;
import br.mackenzie.chutesal.util.crud.UpdateForm;
import br.mackenzie.chutesal.util.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UnidadeServiceImpl implements UnidadeService {

    private final UnidadeRepo unidadeRepo;
    private final QuadraRepo quadraRepo;
    private final CampeonatoRepo campeonatoRepo;

    @Autowired
    public UnidadeServiceImpl(UnidadeRepo unidadeRepo, QuadraRepo quadraRepo, CampeonatoRepo campeonatoRepo) {
        this.unidadeRepo = unidadeRepo;
        this.quadraRepo = quadraRepo;
        this.campeonatoRepo = campeonatoRepo;
    }

    @Override
    public List<Unidade> findAll() {
        return unidadeRepo.findAll();
    }

    @Override
    public Unidade findById(Long id) {
        Optional<Unidade> unidade = unidadeRepo.findById(id);
        if(unidade.isPresent()) {
            return unidade.get();
        } else {
            throw new NotFoundException("Unidade " + id + " não encontrada!");
        }
    }

    @Override
    public Unidade create(Form<Unidade> form) {
        UnidadeForm unidadeForm = (UnidadeForm) form;

        List<Quadra> quadras = quadraRepo.findAllById(unidadeForm.getQuadrasId());
        List<Campeonato> campeonatos = campeonatoRepo.findAllById(unidadeForm.getCampeonatosId());

        Unidade unidade = unidadeForm.convert(quadras, campeonatos);
        return unidadeRepo.save(unidade);
    }

    @Override
    public Unidade update(Long id, UpdateForm<Unidade> updateForm) {
        UnidadeUpdateForm unidadeUpdateForm = (UnidadeUpdateForm) updateForm;

        Optional<Unidade> unidade = unidadeRepo.findById(id);
        List<Quadra> quadras = quadraRepo.findAllById(unidadeUpdateForm.getQuadrasId());
        List<Campeonato> campeonatos = campeonatoRepo.findAllById(unidadeUpdateForm.getCampeonatosId());

        if(unidade.isPresent()) {
            return unidadeUpdateForm.update(unidade.get(), quadras, campeonatos);
        } else {
            throw new NotFoundException("Unidade " + id + " não encontrada!");
        }
    }

    @Override
    public void delete(Long id) {
        Optional<Unidade> unidade = unidadeRepo.findById(id);
        if(unidade.isPresent()) {
            unidadeRepo.delete(unidade.get());
        } else {
            throw new NotFoundException("Unidade " + id + " não encontrada!");
        }
    }
}
