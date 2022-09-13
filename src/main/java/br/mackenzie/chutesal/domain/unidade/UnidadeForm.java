package br.mackenzie.chutesal.domain.unidade;

import br.mackenzie.chutesal.domain.campeonato.Campeonato;
import br.mackenzie.chutesal.domain.quadra.Quadra;
import br.mackenzie.chutesal.util.crud.Form;
import br.mackenzie.chutesal.util.endereco.Endereco;
import br.mackenzie.chutesal.util.endereco.EnderecoForm;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UnidadeForm implements Form<Unidade> {

    private String nome;
    private Integer numero;
    private EnderecoForm endereco;
    private List<Long> quadrasId;
    private List<Long> campeonatosId;

    public Unidade convert(List<Quadra> quadras, List<Campeonato> campeonatos, Endereco endereco) {
        return new Unidade(this.nome, this.numero, endereco, quadras, campeonatos);
    }

    @Override
    public Unidade convert() {
        return null;
    }
}
