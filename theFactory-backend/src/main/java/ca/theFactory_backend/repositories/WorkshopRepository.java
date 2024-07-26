package ca.theFactory_backend.repositories;

import ca.theFactory_backend.model.Workshop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface WorkshopRepository extends JpaRepository<Workshop, Integer> {
    List<Workshop> findAllByDateTimeBefore(LocalDateTime dateTime);

    List<Workshop> findAllByDateTimeAfter(LocalDateTime dateTime);
}
