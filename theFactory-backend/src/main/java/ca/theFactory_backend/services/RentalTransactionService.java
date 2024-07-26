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
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Transactional
@Service
public class RentalTransactionService {

    private final RentalTransactionRepository rentalTransactionRepository;
    private final PersonRepository personRepository;
    private final ItemRepository itemRepository;

    public RentalTransactionService(RentalTransactionRepository rentalTransactionRepository, PersonRepository personRepository, ItemRepository itemRepository) {
        this.rentalTransactionRepository = rentalTransactionRepository;
        this.personRepository = personRepository;
        this.itemRepository = itemRepository;
    }

    /**
     * Create a new rental transaction from the NewRentalTransactionDTO, which only includes the needed fields to
     * create a transaction. The return date, returning manager, and return condition are not included in the DTO,
     * as they are not needed to create a new transaction.
     *
     * @param newRentalTransactionDTO DTO containing the needed fields to create a new rental transaction
     * @return the newly created rental transaction
     */
    public RentalTransactionDTO createNewRental(NewRentalTransactionDTO newRentalTransactionDTO) {
        // validate the DTO
        if (newRentalTransactionDTO.getApprovingManagerId() < 0 ) {
            throw new IllegalArgumentException("Approving manager is required");
        }
        if (newRentalTransactionDTO.getTransactionDateTime() == null) {
            throw new IllegalArgumentException("Transaction date & time is required");
        }
        if (newRentalTransactionDTO.getItemIds() == null || newRentalTransactionDTO.getItemIds().isEmpty()) {
            throw new IllegalArgumentException("At least one rental item is required");
        }
        if (newRentalTransactionDTO.getMemberId() < 0) {
            throw new IllegalArgumentException("Renting member is required");
        }

        // get the member from the person repository
        Person member = personRepository.findById(newRentalTransactionDTO.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException("Member not found"));

        // get the approving manager from the person repository
        Person approvingManager = personRepository.findById(newRentalTransactionDTO.getApprovingManagerId())
                .orElseThrow(() -> new IllegalArgumentException("Approving manager not found"));

        // get the items from the item repository
        List<Item> items = (List<Item>) itemRepository.findAllById(newRentalTransactionDTO.getItemIds());

        // create a new rental transaction from the DTO
        RentalTransaction rentalTransaction = RentalTransactionMapper.INSTANCE.NewDTOToRentalTransaction(newRentalTransactionDTO);

        // save and return the rental transaction DTO to frontend
        return RentalTransactionMapper.INSTANCE.RentalTransactionToDTO(rentalTransactionRepository.save(rentalTransaction));
    }

    /**
     * Get a rental transaction by its transaction ID.
     * @param transactionId the ID of the transaction to get
     * @return the rental transaction DTO (identical to the RentalTransaction entity)
     */
    public RentalTransactionDTO getTransactionById(int transactionId) {
        return RentalTransactionMapper.INSTANCE.RentalTransactionToDTO(rentalTransactionRepository.findByTransactionId(transactionId)
                .orElseThrow(() -> new IllegalArgumentException("Transaction not found")));
    }

    /**
     * Get all rental transactions.
     * @return a list of all rental transactions DTO (identical to the RentalTransaction entity)
     */
    public List<RentalTransactionDTO> getAllTransactions() {
        return RentalTransactionMapper.INSTANCE.RentalTransactionsToDTOs(rentalTransactionRepository.findAllTransactions());
    }


}
