package br.mackenzie.chutesal.util.exception.handler;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class NotFoundExceptionDto {

    private final int status;
    private final String error;
}
