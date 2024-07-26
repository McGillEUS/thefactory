package ca.theFactory_backend.controllers.dtos;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;

/**
 * DTO for creating a new rental transaction.
 * This DTO only contains the fields required to create a new rental transaction.
 * The return date, returning manager, and return condition are not included in the DTO,
 * as they are not needed to create a new transaction.
 */
@Data
public class NewRentalTransactionDTO {
    private ArrayList<Integer> itemIds;
    private int memberId;
    private int approvingManagerId;
    private LocalDateTime transactionDateTime;
    private LocalDate expectedReturnDate;
    private String notes;
}
