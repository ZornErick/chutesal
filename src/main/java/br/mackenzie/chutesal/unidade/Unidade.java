package br.mackenzie.chutesal.unidade;

import javax.persistence.*;

@Entity
@Table
public class Unidade {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
