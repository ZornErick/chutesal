package br.mackenzie.chutesal.domain.campeonato;

import br.mackenzie.chutesal.domain.time.Time;
import br.mackenzie.chutesal.util.crud.UpdateForm;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class InsertVencedorForm implements UpdateForm<Campeonato> {

    @NotNull
    private Long primeiroLugarId;
    @NotNull
    private Long segundoLugarId;
    @NotNull
    private Long terceiroLugarId;

    public Campeonato update(Campeonato entity, Time primeiroLugar, Time segundoLugar, Time terceiroLugar) {
        entity.setPrimeiroLugar(primeiroLugar);
        entity.setSegundoLugar(segundoLugar);
        entity.setTerceiroLugar(terceiroLugar);

        return entity;
    }

    @Override
    public Campeonato update(Campeonato entity) {
        return null;
    }
}
