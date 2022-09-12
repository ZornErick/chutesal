package br.mackenzie.chutesal.domain.unidade;

import br.mackenzie.chutesal.domain.campeonato.Campeonato;
import br.mackenzie.chutesal.domain.quadra.Quadra;
import br.mackenzie.chutesal.util.endereco.Endereco;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
public class UnidadeDto {

    private String nome;
    private Integer numero;
    private Endereco endereco;
    private List<Quadra> quadras;
    private List<Campeonato> campeonatos;

    public UnidadeDto(Unidade unidade) {
        this.nome = unidade.getNome();
        this.numero = unidade.getNumero();
        this.endereco = unidade.getEndereco();
        this.quadras = unidade.getQuadras();
        this.campeonatos = unidade.getCampeonatos();
    }

    public List<UnidadeDto> convert(List<Unidade> unidades) {
        return unidades.stream().map(UnidadeDto::new).collect(Collectors.toList());
    }
}
