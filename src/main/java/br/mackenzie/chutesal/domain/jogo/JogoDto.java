package br.mackenzie.chutesal.domain.jogo;

import br.mackenzie.chutesal.domain.campeonato.Campeonato;
import br.mackenzie.chutesal.domain.quadra.Quadra;
import br.mackenzie.chutesal.domain.time.Time;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
public class JogoDto {

    private Long id;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime horario;
    private Campeonato campeonato;
    private Quadra quadra;
    private List<Time> times;

    public JogoDto(Jogo jogo) {
        this.id = jogo.getId();
        this.horario = jogo.getHorario();
        this.campeonato = jogo.getCampeonato();
        this.quadra = jogo.getQuadra();
        this.times = jogo.getTimes();
    }

    public List<JogoDto> convert(List<Jogo> jogos) {
        return jogos.stream().map(JogoDto::new).collect(Collectors.toList());
    }
}
