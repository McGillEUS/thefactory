package ca.theFactory_backend.controllers.mappers;

import ca.theFactory_backend.controllers.dtos.WorkshopDTO;
import ca.theFactory_backend.model.Workshop;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class WorkshopMapperTest {

    private WorkshopMapper mapper;

    @BeforeEach
    void setUp() {
        mapper = Mappers.getMapper(WorkshopMapper.class);
    }

    @Test
    void toWorkshopDTO_convertsWorkshopToDTO() {
        Workshop workshop = new Workshop();
        workshop.setWorkshopId(1);

        WorkshopDTO result = mapper.toWorkshopDTO(workshop);

        assertNotNull(result);
        assertEquals(workshop.getWorkshopId(), result.getWorkshopId());
    }

    @Test
    void toWorkshopDTOs_convertsListOfWorkshopsToDTOs() {
        Workshop workshop = new Workshop();
        workshop.setWorkshopId(1);
        List<Workshop> workshops = Arrays.asList(workshop);

        List<WorkshopDTO> result = mapper.toWorkshopDTOs(workshops);

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(workshop.getWorkshopId(), result.get(0).getWorkshopId());
    }

    @Test
    void toWorkshop_convertsDTOToWorkshop() {
        WorkshopDTO workshopDTO = new WorkshopDTO();
        workshopDTO.setWorkshopId(1);

        Workshop result = mapper.toWorkshop(workshopDTO);

        assertNotNull(result);
        assertEquals(workshopDTO.getWorkshopId(), result.getWorkshopId());
    }

    @Test
    void toWorkshops_convertsListOfDTOsToWorkshops() {
        WorkshopDTO workshopDTO = new WorkshopDTO();
        workshopDTO.setWorkshopId(1);
        List<WorkshopDTO> workshopDTOs = Arrays.asList(workshopDTO);

        List<Workshop> result = mapper.toWorkshops(workshopDTOs);

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(workshopDTO.getWorkshopId(), result.get(0).getWorkshopId());
    }
}
