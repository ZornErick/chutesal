package br.mackenzie.chutesal.inscrito;

import javax.persistence.*;

@Entity
@Table
public class Inscrito {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
