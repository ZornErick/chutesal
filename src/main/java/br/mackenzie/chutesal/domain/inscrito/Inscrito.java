package br.mackenzie.chutesal.domain.inscrito;

import br.mackenzie.chutesal.domain.time.Time;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tb_inscrito")
@NoArgsConstructor
@Getter
@Setter
public class Inscrito {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String apelido = "";
    private String whatsapp;
    private LocalDate dataNascimento;

    @ManyToOne
    private Time time;

    public Inscrito(String nome, String apelido, String whatsapp, LocalDate dataNascimento) {
        this.nome = nome;
        this.apelido = apelido;
        this.whatsapp = whatsapp;
        this.dataNascimento = dataNascimento;
    }
}