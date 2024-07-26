package ca.theFactory_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "workshop")
public class Workshop {
    @Id
    @Column(name = "workshop_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int workshopId;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "date_time")
    @Temporal(TemporalType.TIMESTAMP)
    @NotNull
    private LocalDateTime dateTime;

    @Column(name = "location")
    private String location;

//    @Lob
//    @Column(name = "image", columnDefinition = "BYTEA")
//    private byte[] image;

    @Column(name = "sign_up_url")
    private String signUpUrl;

    @Column(name = "description")
    private String description;

    @Column(name = "google_drive_url")
    private String googleDriveUrl;
}
