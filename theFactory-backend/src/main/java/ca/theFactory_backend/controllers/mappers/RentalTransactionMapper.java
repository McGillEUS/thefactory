package ca.theFactory_backend.controllers.mappers;

import ca.theFactory_backend.controllers.dtos.NewRentalTransactionDTO;
import ca.theFactory_backend.controllers.dtos.RentalTransactionDTO;
import ca.theFactory_backend.model.RentalTransaction;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface RentalTransactionMapper {
    RentalTransactionMapper INSTANCE = Mappers.getMapper(RentalTransactionMapper.class);

    @Named("RentalTransactionToDTO")
    RentalTransactionDTO RentalTransactionToDTO(RentalTransaction rentalTransaction);

    @IterableMapping(qualifiedByName = "RentalTransactionToDTO")
    List<RentalTransactionDTO> RentalTransactionsToDTOs(List<RentalTransaction> rentalTransactions);

    @Named("DTOToRentalTransaction")
    RentalTransaction DTOToRentalTransaction(RentalTransactionDTO rentalTransactionDTO);

    @IterableMapping(qualifiedByName = "DTOToRentalTransaction")
    List<RentalTransaction> DTOsToRentalTransactions(List<RentalTransactionDTO> rentalTransactionDTOs);

    @Named("NewDTOToRentalTransaction")
    RentalTransaction NewDTOToRentalTransaction(NewRentalTransactionDTO newRentalTransactionDTO);

    @IterableMapping(qualifiedByName = "NewDTOToRentalTransaction")
    List<RentalTransaction> NewDTOsToRentalTransactions(List<NewRentalTransactionDTO> newRentalTransactionDTOs);

}
