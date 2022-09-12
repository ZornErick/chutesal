package br.mackenzie.chutesal.util.exception.handler;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class ValidationFormError {

    private final String campo;
    private final String erro;
}
