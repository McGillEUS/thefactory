package ca.theFactory_backend.controllers.dtos;

import ca.theFactory_backend.model.enums.ItemCondition;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;

@Data
public class RentalTransactionDTO {
    private int transactionId;
    private ArrayList<Integer> itemIds;
    private int memberId;
    private int approvingManagerId;
    private int returningManagerId;
    private LocalDateTime transactionDateTime;
    private LocalDate expectedReturnDate;
    private LocalDate actualReturnDate;
    private ItemCondition returnCondition;
    private String notes;
}
