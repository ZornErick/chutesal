package br.mackenzie.chutesal.util.validation;

import lombok.Getter;

@Getter
public class ValidationFormError {

    private final String campo;
    private final String erro;

    public ValidationFormError(String campo, String erro) {
        this.campo = campo;
        this.erro = erro;
    }
}
