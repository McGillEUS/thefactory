package ca.theFactory_backend.controllers;

import ca.theFactory_backend.model.Person;
import ca.theFactory_backend.model.PersonDetails;
import ca.theFactory_backend.model.Role;
import ca.theFactory_backend.security.Login;
import ca.theFactory_backend.services.PersonService;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.coyote.BadRequestException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/authentication")
public class AuthenticationController {

    private final AuthenticationManager authenticationManager;
    private final PersonService personService;

    public AuthenticationController(AuthenticationManager authenticationManager, PersonService personService) {
        this.authenticationManager = authenticationManager;
        this.personService = personService;
    }

    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws BadRequestException {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            try {
                String refresh_token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(refresh_token);
                String username = decodedJWT.getSubject();
                Person person = personService.getPersonByEmail(username);
                String access_token = JWT.create()
                        .withSubject(person.getEmail())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
                        .withClaim("email", "useremail")
                        .withClaim("roles", new ArrayList<>(person.getRoles()))
                        .sign(algorithm);

                Map<String, String> tokens = new HashMap<>();
                tokens.put("access_token", access_token);
                tokens.put("refresh_token", refresh_token);
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);
            } catch (Exception e) {
                throw new BadRequestException("Invalid refresh token");
            }
        } else {
            throw new BadRequestException("Refresh token is missing");
        }
    }

    @PostMapping(path = "/login")
    public ResponseEntity login(@RequestBody Login login) {
        try {
            Authentication authentication = authenticationManager
                    .authenticate(
                            new UsernamePasswordAuthenticationToken(
                                    login.getEmail(), login.getPassword()
                            )
                    );

            PersonDetails person = (PersonDetails) authentication.getPrincipal();
            Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());

            String access_token = JWT.create()
                    .withSubject(person.getUsername())
                    .withExpiresAt(new Date(System.currentTimeMillis() + 30 * 60 * 1000)) // 30 minutes
                    .withClaim("roles", person.getAuthorities().stream().map(a -> a.getAuthority()).collect(Collectors.toList()))
                    .sign(algorithm);

            String refresh_token = JWT.create()
                    .withSubject(person.getUsername())
                    .withExpiresAt(new Date(System.currentTimeMillis() + 60 * 60 * 1000)) // 60 minutes
                    .sign(algorithm);

            LinkedHashMap<String, Object> tokens = new LinkedHashMap<>();
            tokens.put("id", person.getPersonId());
            tokens.put("name", person.getFullName());
            tokens.put("email", person.getEmail());
            tokens.put("token", access_token);
            tokens.put("refresh_token", refresh_token);

            return ResponseEntity.ok(tokens);
        } catch (BadCredentialsException e) {
            return ResponseEntity.badRequest().body("Invalid Username and Password");
        }
    }
}
