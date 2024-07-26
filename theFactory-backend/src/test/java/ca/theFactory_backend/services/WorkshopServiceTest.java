package ca.theFactory_backend.services;

import ca.theFactory_backend.controllers.dtos.WorkshopDTO;
import ca.theFactory_backend.model.Workshop;
import ca.theFactory_backend.repositories.WorkshopRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class WorkshopServiceTest {

    @Mock
    private WorkshopRepository workshopRepository;

    @InjectMocks
    private WorkshopService workshopService;

    private Workshop workshop;
    private WorkshopDTO workshopDTO;

    @BeforeEach
    void setUp() {
        workshop = new Workshop();
        workshop.setWorkshopId(1);

        workshopDTO = new WorkshopDTO();
        workshopDTO.setWorkshopId(1);
    }

    @Test
    void getWorkshopById_returnsWorkshopDTO() {
        when(workshopRepository.findById(1)).thenReturn(Optional.of(workshop));

        WorkshopDTO result = workshopService.getWorkshopById(1);

        assertNotNull(result);
        assertEquals(workshopDTO.getWorkshopId(), result.getWorkshopId());
    }

    @Test
    void getWorkshopById_workshopNotFound_throwsException() {
        when(workshopRepository.findById(1)).thenReturn(Optional.empty());

        assertThrows(NoSuchElementException.class, () -> workshopService.getWorkshopById(1));
    }

    @Test
    void getUpcomingWorkshops_returnsListOfWorkshopDTOs() {
        List<Workshop> workshops = Arrays.asList(workshop);
        when(workshopRepository.findAllByDateTimeAfter(any(LocalDateTime.class))).thenReturn(workshops);

        List<WorkshopDTO> result = workshopService.getUpcomingWorkshops();

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(workshopDTO.getWorkshopId(), result.get(0).getWorkshopId());
    }

    @Test
    void getPastWorkshops_returnsListOfWorkshopDTOs() {
        List<Workshop> workshops = Arrays.asList(workshop);
        when(workshopRepository.findAllByDateTimeBefore(any(LocalDateTime.class))).thenReturn(workshops);

        List<WorkshopDTO> result = workshopService.getPastWorkshops();

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(workshopDTO.getWorkshopId(), result.get(0).getWorkshopId());
    }

    @Test
    void createWorkshop_returnsWorkshopDTO() {
        when(workshopRepository.save(any(Workshop.class))).thenReturn(workshop);

        WorkshopDTO result = workshopService.createWorkshop(workshopDTO);

        assertNotNull(result);
        assertEquals(workshopDTO.getWorkshopId(), result.getWorkshopId());
    }

    @Test
    void updateWorkshop_returnsWorkshopDTO() {
        when(workshopRepository.save(any(Workshop.class))).thenReturn(workshop);

        WorkshopDTO result = workshopService.updateWorkshop(workshopDTO);

        assertNotNull(result);
        assertEquals(workshopDTO.getWorkshopId(), result.getWorkshopId());
    }

    @Test
    void deleteWorkshop_returnsTrue() {
        assertTrue(workshopService.deleteWorkshop(1));
    }
}
