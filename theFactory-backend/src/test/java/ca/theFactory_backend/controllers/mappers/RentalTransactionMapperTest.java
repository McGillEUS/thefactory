package ca.theFactory_backend.controllers.mappers;

import ca.theFactory_backend.controllers.dtos.NewRentalTransactionDTO;
import ca.theFactory_backend.controllers.dtos.RentalTransactionDTO;
import ca.theFactory_backend.model.RentalTransaction;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class RentalTransactionMapperTest {

    private final RentalTransactionMapper mapper = Mappers.getMapper(RentalTransactionMapper.class);

    @Test
    void testRentalTransactionToDTO() {
        RentalTransaction rentalTransaction = new RentalTransaction();
        rentalTransaction.setTransactionId(1);

        RentalTransactionDTO rentalTransactionDTO = mapper.RentalTransactionToDTO(rentalTransaction);

        assertNotNull(rentalTransactionDTO);
        assertEquals(rentalTransaction.getTransactionId(), rentalTransactionDTO.getTransactionId());
    }

    @Test
    void testRentalTransactionsToDTOs() {
        RentalTransaction rentalTransaction1 = new RentalTransaction();
        rentalTransaction1.setTransactionId(1);
        RentalTransaction rentalTransaction2 = new RentalTransaction();
        rentalTransaction2.setTransactionId(2);

        List<RentalTransaction> rentalTransactions = Arrays.asList(rentalTransaction1, rentalTransaction2);

        List<RentalTransactionDTO> rentalTransactionDTOs = mapper.RentalTransactionsToDTOs(rentalTransactions);

        assertNotNull(rentalTransactionDTOs);
        assertEquals(2, rentalTransactionDTOs.size());
        assertEquals(rentalTransaction1.getTransactionId(), rentalTransactionDTOs.get(0).getTransactionId());
        assertEquals(rentalTransaction2.getTransactionId(), rentalTransactionDTOs.get(1).getTransactionId());
    }

    @Test
    void testDTOToRentalTransaction() {
        RentalTransactionDTO rentalTransactionDTO = new RentalTransactionDTO();
        rentalTransactionDTO.setTransactionId(1);

        RentalTransaction rentalTransaction = mapper.DTOToRentalTransaction(rentalTransactionDTO);

        assertNotNull(rentalTransaction);
        assertEquals(rentalTransactionDTO.getTransactionId(), rentalTransaction.getTransactionId());
    }

    @Test
    void testDTOsToRentalTransactions() {
        RentalTransactionDTO rentalTransactionDTO1 = new RentalTransactionDTO();
        rentalTransactionDTO1.setTransactionId(1);
        RentalTransactionDTO rentalTransactionDTO2 = new RentalTransactionDTO();
        rentalTransactionDTO2.setTransactionId(2);

        List<RentalTransactionDTO> rentalTransactionDTOs = Arrays.asList(rentalTransactionDTO1, rentalTransactionDTO2);

        List<RentalTransaction> rentalTransactions = mapper.DTOsToRentalTransactions(rentalTransactionDTOs);

        assertNotNull(rentalTransactions);
        assertEquals(2, rentalTransactions.size());
        assertEquals(rentalTransactionDTO1.getTransactionId(), rentalTransactions.get(0).getTransactionId());
        assertEquals(rentalTransactionDTO2.getTransactionId(), rentalTransactions.get(1).getTransactionId());
    }

    @Test
    void testNewDTOToRentalTransaction() {
        NewRentalTransactionDTO newRentalTransactionDTO = new NewRentalTransactionDTO();
        newRentalTransactionDTO.setApprovingManagerId(1);
        newRentalTransactionDTO.setTransactionDateTime(LocalDateTime.now());
        newRentalTransactionDTO.setItemIds(new ArrayList<>(Arrays.asList(1, 2, 3)));
        newRentalTransactionDTO.setMemberId(2);

        RentalTransaction rentalTransaction = mapper.NewDTOToRentalTransaction(newRentalTransactionDTO);

        assertNotNull(rentalTransaction);
        // Add more assertions based on how the mapping is defined.
    }

    @Test
    void testNewDTOsToRentalTransactions() {
        NewRentalTransactionDTO newRentalTransactionDTO1 = new NewRentalTransactionDTO();
        newRentalTransactionDTO1.setApprovingManagerId(1);
        newRentalTransactionDTO1.setTransactionDateTime(LocalDateTime.now());
        newRentalTransactionDTO1.setItemIds(new ArrayList<>(Arrays.asList(1, 2, 3)));
        newRentalTransactionDTO1.setMemberId(2);

        NewRentalTransactionDTO newRentalTransactionDTO2 = new NewRentalTransactionDTO();
        newRentalTransactionDTO2.setApprovingManagerId(2);
        newRentalTransactionDTO2.setTransactionDateTime(LocalDateTime.now());
        newRentalTransactionDTO2.setItemIds(new ArrayList<>(Arrays.asList(4, 5, 6)));
        newRentalTransactionDTO2.setMemberId(3);

        List<NewRentalTransactionDTO> newRentalTransactionDTOs = Arrays.asList(newRentalTransactionDTO1, newRentalTransactionDTO2);

        List<RentalTransaction> rentalTransactions = mapper.NewDTOsToRentalTransactions(newRentalTransactionDTOs);

        assertNotNull(rentalTransactions);
        assertEquals(2, rentalTransactions.size());
        // Add more assertions based on how the mapping is defined.
    }
}
