package ca.theFactory_backend.controllers.mappers;

import ca.theFactory_backend.controllers.dtos.NewPersonDTO;
import ca.theFactory_backend.model.Person;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

@Mapper
public interface PersonMapper {
    PersonMapper INSTANCE = Mappers.getMapper(PersonMapper.class);

    @Named("newPersonDTOToPerson")
    Person newPersonDTOToPerson(NewPersonDTO newPersonDTO);

    @IterableMapping(qualifiedByName = "newPersonDTOToPerson")
    Iterable<Person> newPersonDTOsToPersons(Iterable<NewPersonDTO> newPersonDTOs);
}
