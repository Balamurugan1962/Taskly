package taskly.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import taskly.backend.model.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, String> {
}
