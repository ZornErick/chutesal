package br.mackenzie.chutesal.domain.campeonato.service;

import br.mackenzie.chutesal.domain.campeonato.Campeonato;
import br.mackenzie.chutesal.util.crud.CrudService;

public interface CampeonatoService extends CrudService<Campeonato> {

    void deleteTime(Long campeonatoId, Long timeId);
}
