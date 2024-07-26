package ca.theFactory_backend.model;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;


/**
 * This class is used to store the details of a person that is used by Spring Security.
 * It implements the UserDetails interface which is used by Spring Security to authenticate and authorize a user.
 */
@Data
public class PersonDetails implements UserDetails {
    private Person person;

    public PersonDetails(Person person) {
        this.person = person;
    }

    /**
     * Returns the all authorities (can be multiple) granted to the user.
     * Cannot return null.
     *
     * @return a collection of authorities granted to the user.
     */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        for (Role role : person.getRoles()) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }
        return Collections.unmodifiableList(authorities);
    }

    @Override
    public String getPassword() {
        return person.getPassword();
    }

    @Override
    public String getUsername() {
        return person.getEmail();
    }

    public String getFullName() {
        return person.getFirstName() + " " + person.getLastName();
    }

    public String getStudentId() {
        return person.getStudentId();
    }

    public String getPhoneNumber() {
        return person.getPhoneNumber();
    }

    public int getPersonId() {
        return person.getPersonId();
    }

    public String getEmail() {
        return person.getEmail();
    }

    public String getFirstName() {
        return person.getFirstName();
    }

    public String getLastName() {
        return person.getLastName();
    }
}
