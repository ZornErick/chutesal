package br.mackenzie.chutesal.domain.time;

import br.mackenzie.chutesal.domain.campeonato.Campeonato;
import br.mackenzie.chutesal.domain.inscrito.Inscrito;
import br.mackenzie.chutesal.domain.jogo.Jogo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_time")
@NoArgsConstructor
@Getter
@Setter
public class Time {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;
    private String nome;

    @ManyToOne
    private Campeonato campeonato;

    @OneToMany(mappedBy = "time")
    private List<Inscrito> inscritos = new ArrayList<>();

    @ManyToMany
    private List<Jogo> jogos = new ArrayList<>();
}
