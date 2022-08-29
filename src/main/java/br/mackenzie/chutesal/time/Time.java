package br.mackenzie.chutesal.time;

import javax.persistence.*;

@Entity
@Table
public class Time {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
