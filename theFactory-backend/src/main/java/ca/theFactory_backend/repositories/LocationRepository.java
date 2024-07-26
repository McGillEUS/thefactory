package ca.theFactory_backend.repositories;

import ca.theFactory_backend.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Integer> {
}
