package ca.theFactory_backend.repositories;

import ca.theFactory_backend.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> {
}
