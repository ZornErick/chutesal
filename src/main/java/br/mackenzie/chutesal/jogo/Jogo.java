package br.mackenzie.chutesal.jogo;

import javax.persistence.*;

@Entity
@Table
public class Jogo {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
