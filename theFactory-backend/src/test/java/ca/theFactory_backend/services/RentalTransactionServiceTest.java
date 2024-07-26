package ca.theFactory_backend.services;

import ca.theFactory_backend.controllers.dtos.NewRentalTransactionDTO;
import ca.theFactory_backend.controllers.dtos.RentalTransactionDTO;
import ca.theFactory_backend.model.Item;
import ca.theFactory_backend.model.Person;
import ca.theFactory_backend.model.RentalTransaction;
import ca.theFactory_backend.controllers.mappers.RentalTransactionMapper;
import ca.theFactory_backend.repositories.ItemRepository;
import ca.theFactory_backend.repositories.PersonRepository;
import ca.theFactory_backend.repositories.RentalTransactionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class RentalTransactionServiceTest {

    @Mock
    private RentalTransactionRepository rentalTransactionRepository;

    @Mock
    private PersonRepository personRepository;

    @Mock
    private ItemRepository itemRepository;

    @InjectMocks
    private RentalTransactionService rentalTransactionService;

    private NewRentalTransactionDTO newRentalTransactionDTO;
    private Person member;
    private Person approvingManager;
    private List<Item> items;
    private RentalTransaction rentalTransaction;
    private RentalTransactionDTO rentalTransactionDTO;

    @BeforeEach
    void setUp() {
        newRentalTransactionDTO = new NewRentalTransactionDTO();
        newRentalTransactionDTO.setApprovingManagerId(1);
        newRentalTransactionDTO.setTransactionDateTime(LocalDateTime.now());
        newRentalTransactionDTO.setItemIds(new ArrayList<>(Arrays.asList(1, 2, 3)));
        newRentalTransactionDTO.setMemberId(2);

        member = new Person();
        member.setPersonId(2);

        approvingManager = new Person();
        approvingManager.setPersonId(1);

        Item item1 = new Item();
        item1.setItemId(1);
        Item item2 = new Item();
        item2.setItemId(2);
        Item item3 = new Item();
        item3.setItemId(3);
        items = Arrays.asList(item1, item2, item3);

        rentalTransaction = new RentalTransaction();
        rentalTransaction.setTransactionId(1);

        rentalTransactionDTO = new RentalTransactionDTO();
        rentalTransactionDTO.setTransactionId(1);
    }

    @Test
    void testCreateNewRental_ValidDTO_ReturnsRentalTransactionDTO() {
        when(personRepository.findById(2)).thenReturn(Optional.of(member));
        when(personRepository.findById(1)).thenReturn(Optional.of(approvingManager));
        when(itemRepository.findAllById(newRentalTransactionDTO.getItemIds())).thenReturn(items);
        when(rentalTransactionRepository.save(any(RentalTransaction.class))).thenReturn(rentalTransaction);

        RentalTransactionDTO result = rentalTransactionService.createNewRental(newRentalTransactionDTO);

        assertNotNull(result);
        assertEquals(rentalTransactionDTO.getTransactionId(), result.getTransactionId());
    }

    @Test
    void testCreateNewRental_MissingApprovingManager_ThrowsException() {
        newRentalTransactionDTO.setApprovingManagerId(-1);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            rentalTransactionService.createNewRental(newRentalTransactionDTO);
        });

        assertEquals("Approving manager is required", exception.getMessage());
    }

    @Test
    void testCreateNewRental_MissingTransactionDateTime_ThrowsException() {
        newRentalTransactionDTO.setTransactionDateTime(null);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            rentalTransactionService.createNewRental(newRentalTransactionDTO);
        });

        assertEquals("Transaction date & time is required", exception.getMessage());
    }

    @Test
    void testCreateNewRental_MissingItemIds_ThrowsException() {
        newRentalTransactionDTO.setItemIds(null);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            rentalTransactionService.createNewRental(newRentalTransactionDTO);
        });

        assertEquals("At least one rental item is required", exception.getMessage());
    }

    @Test
    void testCreateNewRental_EmptyItemIds_ThrowsException() {
        newRentalTransactionDTO.setItemIds(new ArrayList<>());

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            rentalTransactionService.createNewRental(newRentalTransactionDTO);
        });

        assertEquals("At least one rental item is required", exception.getMessage());
    }

    @Test
    void testCreateNewRental_MissingMemberId_ThrowsException() {
        newRentalTransactionDTO.setMemberId(-1);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            rentalTransactionService.createNewRental(newRentalTransactionDTO);
        });

        assertEquals("Renting member is required", exception.getMessage());
    }

    @Test
    void testGetTransactionById_ValidId_ReturnsRentalTransactionDTO() {
        when(rentalTransactionRepository.findByTransactionId(1)).thenReturn(Optional.of(rentalTransaction));

        RentalTransactionDTO result = rentalTransactionService.getTransactionById(1);

        assertNotNull(result);
        assertEquals(rentalTransactionDTO.getTransactionId(), result.getTransactionId());
    }

    @Test
    void testGetTransactionById_InvalidId_ThrowsException() {
        when(rentalTransactionRepository.findByTransactionId(1)).thenReturn(Optional.empty());

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            rentalTransactionService.getTransactionById(1);
        });

        assertEquals("Transaction not found", exception.getMessage());
    }

    @Test
    void testGetAllTransactions_ReturnsListOfRentalTransactionDTOs() {
        List<RentalTransaction> rentalTransactions = Arrays.asList(rentalTransaction);
        List<RentalTransactionDTO> rentalTransactionDTOs = Arrays.asList(rentalTransactionDTO);

        when(rentalTransactionRepository.findAllTransactions()).thenReturn(rentalTransactions);

        List<RentalTransactionDTO> result = rentalTransactionService.getAllTransactions();

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(rentalTransactionDTOs, result);
    }
}
