package ca.theFactory_backend.config;


import ca.theFactory_backend.services.IdentityService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Slf4j
@Configuration
@EnableWebSecurity
@EnableMethodSecurity()
public class SecurityConfig {
    private final YamlConfig yamlConfig;

    public SecurityConfig(YamlConfig yamlConfig) {
        log.info("SecurityConfig created");
        this.yamlConfig = yamlConfig;
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return new IdentityService();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors(Customizer.withDefaults());
        http.csrf(Customizer.withDefaults());
        http.sessionManagement(sessionManager -> sessionManager.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        http.formLogin(formLogin -> formLogin.loginPage("/login").permitAll());
        http.exceptionHandling(exceptionHandling -> exceptionHandling.authenticationEntryPoint(
                (request, response, exception) -> {
                    log.error("Unauthorized request: {}", exception.getMessage());
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, exception.getMessage());
                }));
        http.authorizeHttpRequests(authorizeHttpRequest -> authorizeHttpRequest
                .requestMatchers("/actuator/health", "/actuator/metrics", "/actuator/metrics/**", "/api/v3/**", "/swagger-ui/**", "/swagger-ui.html", "/api/monitor/**", "/api/authentication/**", "/**").permitAll()
                .anyRequest().authenticated()
        );
        if (!yamlConfig.getPublicApiList().isEmpty()) {
            http.authorizeHttpRequests(authorizeHttpRequest -> authorizeHttpRequest
                    .requestMatchers(String.join(", ", yamlConfig.getPublicApiList())).permitAll()
                    .anyRequest().authenticated()
            );
            log.info("Added public API: '{}' ", String.join("', '", yamlConfig.getPublicApiList()));
        }
        http.addFilterBefore(new SecurityFilter(), UsernamePasswordAuthenticationFilter.class); // custom protocol Authorization
        return http.build();
    }
}
