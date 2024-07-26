package ca.theFactory_backend.repositories;

import ca.theFactory_backend.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@NoRepositoryBean
public interface TransactionRepository<R extends Transaction> extends JpaRepository<Transaction, Integer> {
    @Query("SELECT t FROM #{#entityName} t WHERE t.transactionId = ?1")
    Optional<R> findByTransactionId(int transactionId);

    @Query("SELECT t FROM #{#entityName} t")
    List<R> findAllTransactions();

    @Query("SELECT t FROM #{#entityName} t WHERE t.member = ?1")
    List<R> findByMemberId(int memberId);

    @Query("SELECT t FROM #{#entityName} t WHERE t.approvingManager = ?1")
    List<R> findByApprovingManagerId(int approvingManagerId);

    @Query("SELECT t FROM #{#entityName} t WHERE t.transactionDateTime = ?1")
    List<R> findByTransactionDateTime(LocalDateTime transactionDateTime);

//    @Query("SELECT t FROM #{#entityName} t WHERE t.item_id = ?1")
//    List<R> findByItemIds(List<Integer> itemIds);

}
