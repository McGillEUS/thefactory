package ca.theFactory_backend.model;

import ca.theFactory_backend.model.enums.ItemCondition;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@DiscriminatorValue("rental")
public class RentalTransaction extends Transaction {

    @Column(name = "expected_return_date")
    @Temporal(TemporalType.DATE)
    @NotNull
    private LocalDate expectedReturnDate;

    @Column(name = "actual_return_date")
    @Temporal(TemporalType.DATE)
    @NotNull
    private LocalDate actualReturnDate;

    @Column(name = "return_condition")
    @Enumerated(EnumType.STRING)
    @NotNull
    private ItemCondition returnCondition;

    @ManyToOne
    @JoinColumn(name = "returning_manager_id")
    private Person returningManager;
}
