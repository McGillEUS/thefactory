package ca.theFactory_backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
@DiscriminatorValue("purchase")
public class PurchaseTransaction extends Transaction {

    @Column(name = "total_cost")
    private double totalCost;
}
