package br.mackenzie.chutesal.domain.campeonato.service;

import br.mackenzie.chutesal.domain.campeonato.Campeonato;
import br.mackenzie.chutesal.domain.campeonato.CampeonatoForm;
import br.mackenzie.chutesal.domain.campeonato.CampeonatoRepo;
import br.mackenzie.chutesal.domain.campeonato.CampeonatoUpdateForm;
import br.mackenzie.chutesal.domain.inscrito.Inscrito;
import br.mackenzie.chutesal.domain.inscrito.InscritoRepo;
import br.mackenzie.chutesal.domain.jogo.Jogo;
import br.mackenzie.chutesal.domain.jogo.JogoRepo;
import br.mackenzie.chutesal.domain.time.Time;
import br.mackenzie.chutesal.domain.time.TimeRepo;
import br.mackenzie.chutesal.domain.unidade.Unidade;
import br.mackenzie.chutesal.domain.unidade.UnidadeRepo;
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
public class CampeonatoServiceImpl implements CampeonatoService {

    private final CampeonatoRepo campeonatoRepo;
    private final UnidadeRepo unidadeRepo;
    private final JogoRepo jogoRepo;
    private final TimeRepo timeRepo;
    private final InscritoRepo inscritoRepo;

    @Autowired
    public CampeonatoServiceImpl(CampeonatoRepo campeonatoRepo, UnidadeRepo unidadeRepo, JogoRepo jogoRepo, TimeRepo timeRepo, InscritoRepo inscritoRepo) {
        this.campeonatoRepo = campeonatoRepo;
        this.unidadeRepo = unidadeRepo;
        this.jogoRepo = jogoRepo;
        this.timeRepo = timeRepo;
        this.inscritoRepo = inscritoRepo;
    }

    @Override
    public List<Campeonato> findAll() {
        return campeonatoRepo.findAll();
    }

    @Override
    public Campeonato findById(Long id) {
        Optional<Campeonato> campeonato = campeonatoRepo.findById(id);
        if(campeonato.isPresent()) {
            return campeonato.get();
        }
        throw new NotFoundException("Campeonato " + id + " não encontrado!");
    }

    @Override
    public Campeonato create(Form<Campeonato> form) {
        CampeonatoForm campeonatoForm = (CampeonatoForm) form;
        Optional<Unidade> unidade = unidadeRepo.findById((campeonatoForm.getUnidadeId()));
        List<Jogo> jogos = jogoRepo.findAllById(campeonatoForm.getJogosId());
        List<Time> times = timeRepo.findAllById(campeonatoForm.getTimesId());
        if(unidade.isPresent()) {
            Campeonato campeonato = campeonatoForm.convert(unidade.get(), jogos, times);
            return campeonatoRepo.save(campeonato);
        }
        throw new NotFoundException("Unidade " + campeonatoForm.getUnidadeId() + " não encontrada!");
    }

    @Override
    public Campeonato update(Long id, UpdateForm<Campeonato> updateForm) {
        CampeonatoUpdateForm campeonatoUpdateForm = (CampeonatoUpdateForm) updateForm;
        Optional<Campeonato> campeonato = campeonatoRepo.findById(id);
        List<Jogo> jogos = jogoRepo.findAllById(campeonatoUpdateForm.getJogosId());
        List<Time> times = timeRepo.findAllById(campeonatoUpdateForm.getTimesId());
        List<Inscrito> inscritos = inscritoRepo.findAllById(campeonatoUpdateForm.getInscritosId());
        if(campeonato.isPresent()) {
            return campeonatoUpdateForm.update(campeonato.get(), jogos, times, inscritos);
        }
        throw new NotFoundException("Campeonato " + id + " não encontrado!");
    }

    @Override
    public void delete(Long id) {
        Optional<Campeonato> campeonato = campeonatoRepo.findById(id);
        if(campeonato.isPresent()) {
            campeonatoRepo.delete(campeonato.get());
        } else {
            throw new NotFoundException("Campeonato " + id + " não encontrado!");
        }
    }

    @Override
    public void deleteTime(Long campeonatoId, Long timeId) {
        Optional<Campeonato> campeonato = campeonatoRepo.findById(campeonatoId);
        Optional<Time> time = timeRepo.findById(timeId);
        if(campeonato.isPresent()) {
            time.ifPresent(timeEntity -> campeonato.get().deleteTime(timeEntity));
            throw new NotFoundException("Time " + timeId + " não encontrado!");
        }
        throw new NotFoundException("Campeonato " + campeonatoId + " não encontrado!");
    }

    @Override
    public List<Inscrito> findInscritosByCampeonatoId(Long campeonatoId) {
        return inscritoRepo.findAllByCampeonatoId(campeonatoId);
    }
}
