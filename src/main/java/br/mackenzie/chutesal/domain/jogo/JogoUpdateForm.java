package br.mackenzie.chutesal.domain.jogo;

import br.mackenzie.chutesal.domain.campeonato.Campeonato;
import br.mackenzie.chutesal.domain.quadra.Quadra;
import br.mackenzie.chutesal.domain.time.Time;
import br.mackenzie.chutesal.util.crud.UpdateForm;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class JogoUpdateForm implements UpdateForm<Jogo> {

    @NotNull @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate data;
    @NotNull @JsonFormat(pattern = "HH:mm:ss")
    private LocalDateTime horario;
    @NotNull
    private Long campeonatoId;
    @NotNull
    private Long quadraId;
    @NotNull
    private List<Long> timesId;

    public Jogo update(Jogo entity, Campeonato campeonato, Quadra quadra, List<Time> times) {
        entity.setData(this.data);
        entity.setHorario(this.horario);
        entity.setCampeonato(campeonato);
        entity.setQuadra(quadra);
        entity.setTimes(times);

        return entity;
    }

    @Override
    public Jogo update(Jogo entity) {
        return null;
    }
}
