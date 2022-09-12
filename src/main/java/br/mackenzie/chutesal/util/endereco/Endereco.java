package br.mackenzie.chutesal.util.endereco;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "tb_endereco")
@NoArgsConstructor
@Getter
@Setter
public class Endereco {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cep;
    private String logradouro;
    private String bairro;
    private String localidade;
    private String uf;
}
