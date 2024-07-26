package ca.theFactory_backend.services;

import ca.theFactory_backend.controllers.dtos.WorkshopDTO;
import ca.theFactory_backend.controllers.mappers.WorkshopMapper;
import ca.theFactory_backend.repositories.WorkshopRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Transactional
@Service
public class WorkshopService {

    private final WorkshopRepository workshopRepository;

    public WorkshopService(WorkshopRepository workshopRepository) {
        this.workshopRepository = workshopRepository;
    }

    public WorkshopDTO getWorkshopById(int workshopId) {
        return WorkshopMapper.INSTANCE.toWorkshopDTO(workshopRepository.findById(workshopId).orElseThrow());
    }

    public List<WorkshopDTO> getUpcomingWorkshops() {
        return WorkshopMapper.INSTANCE.toWorkshopDTOs(workshopRepository.findAllByDateTimeAfter(LocalDateTime.now()));
    }

    public List<WorkshopDTO> getPastWorkshops() {
        return WorkshopMapper.INSTANCE.toWorkshopDTOs(workshopRepository.findAllByDateTimeBefore(LocalDateTime.now()));
    }

    public WorkshopDTO createWorkshop(WorkshopDTO workshopDTO) {
        return WorkshopMapper.INSTANCE.toWorkshopDTO(workshopRepository.save(WorkshopMapper.INSTANCE.toWorkshop(workshopDTO)));
    }

    public WorkshopDTO updateWorkshop(WorkshopDTO workshopDTO) {
        return WorkshopMapper.INSTANCE.toWorkshopDTO(workshopRepository.save(WorkshopMapper.INSTANCE.toWorkshop(workshopDTO)));
    }

    public boolean deleteWorkshop(int workshopId) {
        workshopRepository.deleteById(workshopId);
        return true;
    }


}
