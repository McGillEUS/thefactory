package ca.theFactory_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "transaction")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "transaction_type", discriminatorType = DiscriminatorType.STRING)
public abstract class Transaction {
    @Id
    @Column(name = "transaction_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int transactionId;

    @Column(name = "transaction_date_time")
    @Temporal(TemporalType.TIMESTAMP)
    @NotNull
    private LocalDateTime transactionDateTime;

    @Column(name = "notes")
    @NotNull
    private String notes;

    @ManyToOne
    @JoinColumn(name = "approving_manager_id")
    private Person approvingManager;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Person member;

    @ManyToMany
    @JoinTable(
            name = "transaction_item",
            joinColumns = @JoinColumn(name = "transaction_id"),
            inverseJoinColumns = @JoinColumn(name = "item_id")
    )
    private List<Item> items;
}
