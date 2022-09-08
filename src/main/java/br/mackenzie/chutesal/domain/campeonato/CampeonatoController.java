package br.mackenzie.chutesal.domain.campeonato;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CampeonatoController {

    @GetMapping("/teste")
    public String teste() {
        return "Ola";
    }
}
