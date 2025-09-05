package taskly.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import taskly.backend.model.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task, Long> {
}
