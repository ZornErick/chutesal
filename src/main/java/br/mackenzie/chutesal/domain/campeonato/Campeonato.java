package br.mackenzie.chutesal.domain.campeonato;

import br.mackenzie.chutesal.domain.jogo.Jogo;
import br.mackenzie.chutesal.domain.time.Time;
import br.mackenzie.chutesal.domain.unidade.Unidade;
import br.mackenzie.chutesal.util.status.Status;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    private Long id;
    private String nome;
    private Status status;
    private LocalDate periodoInscricao;
    private LocalDate periodoJogos;
    private LocalDate inicioDivulgacao;

    @ManyToOne
    private Unidade unidade;

    @OneToMany(mappedBy = "campeonato", cascade = CascadeType.ALL)
    private List<Jogo> jogos = new ArrayList<>();

    @OneToMany(mappedBy = "campeonato", cascade = CascadeType.ALL)
    private List<Time> times = new ArrayList<>();
}
