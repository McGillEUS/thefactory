package ca.theFactory_backend.model;

import ca.theFactory_backend.model.enums.ItemCondition;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Entity
@Data
@Table(name = "item")
public class Item {
    @Id
    @Column(name = "item_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int itemId;

    @Column(name = "serial_number")
    private String serialNumber;

    @Column(name = "in_stock")
    @NotNull
    private boolean inStock;

    @Enumerated(EnumType.STRING)
    @Column(name = "item_condition")
    @NotNull
    private ItemCondition itemCondition;
}
