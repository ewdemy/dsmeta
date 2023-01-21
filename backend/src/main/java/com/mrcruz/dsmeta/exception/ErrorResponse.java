package com.mrcruz.dsmeta.exception;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ErrorResponse {
    private LocalDateTime timestamp;
    private Integer status;
    private String message;
    private String path;
}
