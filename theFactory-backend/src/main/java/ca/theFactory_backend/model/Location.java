package ca.theFactory_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
@Table(name = "location")
public class Location {
    @Id
    @Column(name = "location_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int locationId;

    @Column(name = "location_code")
    private String locationCode;

    @Column(name = "name")
    @NotNull
    private String name;
}
