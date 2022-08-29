package br.mackenzie.chutesal.quadra;

import javax.persistence.*;

@Entity
@Table
public class Quadra {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
