package ca.theFactory_backend.services;

import ca.theFactory_backend.model.Person;
import ca.theFactory_backend.model.Role;
import ca.theFactory_backend.repositories.PersonRepository;
import ca.theFactory_backend.repositories.RoleRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class PersonService {
    private final RoleRepository roleRepository;
    private final PersonRepository personRepository;
    private final PasswordEncoder passwordEncoder;

    public PersonService(RoleRepository roleRepository, PersonRepository personRepository, PasswordEncoder passwordEncoder) {
        this.roleRepository = roleRepository;
        this.personRepository = personRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Transactional
    public Person savePerson(Person person) {
        log.info("Saving person: {}", person.getEmail());
        person.setPassword(passwordEncoder.encode(person.getPassword()));
        return personRepository.save(person);
    }

    @Transactional
    public Person getPersonByEmail(String email) {
        return personRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Person not found"));
    }

    public void assignRole(Person person, String roleName) {
        Role role = roleRepository.findByName(roleName)
                .orElseThrow(() -> new IllegalArgumentException("Role not found"));
        person.getRoles().add(role);
        personRepository.save(person);
    }

}
