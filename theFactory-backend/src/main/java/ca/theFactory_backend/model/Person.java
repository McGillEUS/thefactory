package ca.theFactory_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.HashSet;

@Entity
@Data
@Table(name = "person")
public class Person {
    @Id
    @Column(name = "person_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int personId;

    @Column(name = "email")
    @NotNull
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    @NotNull
    private String firstName;

    @Column(name = "last_name")
    @NotNull
    private String lastName;

    @Column(name = "student_id")
    @NotNull
    private String studentId;

    @Column(name = "phone_number")
    private String phoneNumber;

    @ManyToMany
    @JoinTable(
            name = "person_role",
            joinColumns = @JoinColumn(name = "person_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private HashSet<Role> roles = new HashSet<>();

    public String getFullName() {
        return firstName + " " + lastName;
    }

}
