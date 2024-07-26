package ca.theFactory_backend.controllers.dtos;

import lombok.Data;

@Data
public class NewPersonDTO {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String studentId;
    private String phoneNumber;
}
