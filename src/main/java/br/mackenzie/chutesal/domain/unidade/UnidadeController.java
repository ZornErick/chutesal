package br.mackenzie.chutesal.domain.unidade;

import br.mackenzie.chutesal.util.endereco.EnderecoCep;
import br.mackenzie.chutesal.util.endereco.ViaCepClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/unidade")
public class UnidadeController {

    private final ViaCepClient viaCepClient;

    @Autowired
    public UnidadeController(ViaCepClient viaCepClient) {
        this.viaCepClient = viaCepClient;
    }

    @GetMapping("/{cep}")
    public EnderecoCep getEnderecoByCep(@PathVariable("cep") String cep) {
        return viaCepClient.findEnderecoBy(cep);
    }
}
