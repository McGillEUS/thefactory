package ca.theFactory_backend.controllers;

import ca.theFactory_backend.controllers.dtos.NewPersonDTO;
import ca.theFactory_backend.controllers.mappers.PersonMapper;
import ca.theFactory_backend.model.Person;
import ca.theFactory_backend.services.PersonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/person")
public class PersonController {
    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping("/signup")
    public void signup(@RequestBody NewPersonDTO newPersonDTO) {
        log.info("Signup request received");
        Person newPerson = PersonMapper.INSTANCE.newPersonDTOToPerson(newPersonDTO);
        personService.savePerson(newPerson);
    }
}
