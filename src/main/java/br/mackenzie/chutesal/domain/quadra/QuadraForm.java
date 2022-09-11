package br.mackenzie.chutesal.domain.quadra;

import br.mackenzie.chutesal.domain.jogo.Jogo;
import br.mackenzie.chutesal.domain.unidade.Unidade;
import br.mackenzie.chutesal.util.crud.Form;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuadraForm implements Form<Quadra> {

    private String nome;
    private Long unidadeId;
    private List<Long> jogosId;

    public Quadra convert(Unidade unidade, List<Jogo> jogos) {
        return new Quadra(this.nome, unidade, jogos);
    }

    @Override
    public Quadra convert() {
        return null;
    }
}
