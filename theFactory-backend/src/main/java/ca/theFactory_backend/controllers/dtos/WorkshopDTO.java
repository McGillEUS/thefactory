package ca.theFactory_backend.controllers.dtos;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class WorkshopDTO {
    private int workshopId;
    private String name;
    private LocalDateTime dateTime;
    private String location;
    private String signUpUrl;
    private String description;
    private String googleDriveUrl;

}
