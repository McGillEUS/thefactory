package ca.theFactory_backend.controllers.mappers;

import ca.theFactory_backend.controllers.dtos.WorkshopDTO;
import ca.theFactory_backend.model.Workshop;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface WorkshopMapper {
    WorkshopMapper INSTANCE = Mappers.getMapper(WorkshopMapper.class);

    @Named("WorkshopToDTO")
    WorkshopDTO toWorkshopDTO(Workshop workshop);

    @IterableMapping(qualifiedByName = "WorkshopToDTO")
    List<WorkshopDTO> toWorkshopDTOs(List<Workshop> workshops);

    @Named("DTOToWorkshop")
    Workshop toWorkshop(WorkshopDTO workshopDTO);

    @IterableMapping(qualifiedByName = "DTOToWorkshop")
    List<Workshop> toWorkshops(List<WorkshopDTO> workshopDTOs);
}
