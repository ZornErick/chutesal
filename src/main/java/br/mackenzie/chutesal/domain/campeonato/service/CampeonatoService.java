package br.mackenzie.chutesal.domain.campeonato.service;

import br.mackenzie.chutesal.domain.campeonato.Campeonato;
import br.mackenzie.chutesal.domain.inscrito.Inscrito;
import br.mackenzie.chutesal.util.crud.CrudService;

import java.util.List;

public interface CampeonatoService extends CrudService<Campeonato> {

    void deleteTime(Long campeonatoId, Long timeId);

    List<Inscrito> findInscritosByCampeonatoId(Long campeonatoId);
}
