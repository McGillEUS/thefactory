package ca.theFactory_backend.security;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Principal {
    private int id;
    private String name;
    private String email;
    private String password;

    public Principal(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public Principal essence() {
        return new Principal(this.id, this.name, this.email);
    }
}
