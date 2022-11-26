package br.mackenzie.chutesal.domain.jogo;

import br.mackenzie.chutesal.domain.campeonato.Campeonato;
import br.mackenzie.chutesal.domain.quadra.Quadra;
import br.mackenzie.chutesal.domain.time.Time;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_jogo")
@NoArgsConstructor
@Getter
@Setter
public class Jogo {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime horario;

    @ManyToOne
    private Campeonato campeonato;

    @ManyToOne
    private Quadra quadra;

    @ManyToMany(mappedBy = "jogos")
    private List<Time> times = new ArrayList<>(2);

    private Integer placarA = 0;
    private Integer placarB = 0;

    public Jogo(LocalDateTime horario, Campeonato campeonato, Quadra quadra, List<Time> times) {
        this.horario = horario;
        this.campeonato = campeonato;
        this.quadra = quadra;
        this.times = times;
    }
}
