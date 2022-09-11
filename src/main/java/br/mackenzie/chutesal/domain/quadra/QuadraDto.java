package br.mackenzie.chutesal.domain.quadra;

import br.mackenzie.chutesal.domain.jogo.Jogo;
import br.mackenzie.chutesal.domain.unidade.Unidade;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
public class QuadraDto {

    private String nome;
    private Unidade unidade;
    private List<Jogo> jogos;

    public QuadraDto(Quadra quadra) {
        this.nome = quadra.getNome();
        this.unidade = quadra.getUnidade();
        this.jogos = quadra.getJogos();
    }

    public List<QuadraDto> convert(List<Quadra> quadras) {
        return quadras.stream().map(QuadraDto::new).collect(Collectors.toList());
    }
}
