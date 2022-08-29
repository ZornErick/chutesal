package br.mackenzie.chutesal.campeonato;

import javax.persistence.*;

@Entity
@Table
public class Campeonato {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
