package br.mackenzie.chutesal.security.token;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TokenService {

    @Value("${chutesal.jwt.secret}")
    private String secret;
    @Value("${chutesal.jwt.expiration}")
    private String expiration;

    public String token(Authentication authentication) {
        Object principal = authentication.getPrincipal();
        Date date = new Date();
        Date dateExpiration = new Date(date.getTime() + Long.parseLong(expiration));

        return Jwts.builder()
                .setIssuer("API ChuteSal")
                .setSubject()
                .setIssuedAt(date)
                .setExpiration(dateExpiration)
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }
}
