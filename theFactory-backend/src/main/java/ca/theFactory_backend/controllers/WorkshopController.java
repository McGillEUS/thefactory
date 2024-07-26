package ca.theFactory_backend.controllers;

import ca.theFactory_backend.controllers.dtos.WorkshopDTO;
import ca.theFactory_backend.services.WorkshopService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/workshops")
public class WorkshopController {

    private final WorkshopService workshopService;

    public WorkshopController(WorkshopService workshopService) {
        this.workshopService = workshopService;
    }

    @GetMapping("/upcoming")
    public ResponseEntity<List<WorkshopDTO>> getUpcomingWorkshops() {
        log.info("REST request to get upcoming workshops");
        return new ResponseEntity<List<WorkshopDTO>>(workshopService.getUpcomingWorkshops(), HttpStatus.OK);
    }

    @GetMapping("/past")
    public ResponseEntity<List<WorkshopDTO>> getPastWorkshops() {
        log.info("REST request to get past workshops");
        return new ResponseEntity<List<WorkshopDTO>>(workshopService.getPastWorkshops(), HttpStatus.OK);
    }

    @GetMapping("/{workshopId}")
    public ResponseEntity<WorkshopDTO> getWorkshopById(@PathVariable int workshopId) {
        log.info("REST request to get workshop by id: {}", workshopId);
        return new ResponseEntity<WorkshopDTO>(workshopService.getWorkshopById(workshopId), HttpStatus.OK);
    }

    @PostMapping("/new")
    public ResponseEntity<WorkshopDTO> createWorkshop(@RequestBody WorkshopDTO workshopDTO) {
        log.info("REST request to create a new workshop");
        return new ResponseEntity<WorkshopDTO>(workshopService.createWorkshop(workshopDTO), HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<WorkshopDTO> updateWorkshop(@RequestBody WorkshopDTO workshopDTO) {
        log.info("REST request to update workshop with id: {}", workshopDTO.getWorkshopId());
        return new ResponseEntity<WorkshopDTO>(workshopService.updateWorkshop(workshopDTO), HttpStatus.OK);
    }

    @DeleteMapping("/{workshopId}")
    public ResponseEntity<Void> deleteWorkshop(@PathVariable int workshopId) {
        log.info("REST request to delete a workshop with id: {}", workshopId);
        assert workshopService.deleteWorkshop(workshopId);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
