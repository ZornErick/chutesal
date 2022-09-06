package br.mackenzie.chutesal.domain.campeonato;

import br.mackenzie.chutesal.domain.jogo.Jogo;
import br.mackenzie.chutesal.domain.time.Time;
import br.mackenzie.chutesal.domain.unidade.Unidade;
import br.mackenzie.chutesal.util.status.Status;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_campeonato")
@NoArgsConstructor
@Getter
@Setter
public class Campeonato {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Status status;
    private LocalDate periodoInscricao;
    private LocalDate periodoJogos;
    private LocalDate inicioDivulgacao;

    private Unidade unidade;
    private List<Jogo> jogos = new ArrayList<>();
    private List<Time> times = new ArrayList<>();
}
