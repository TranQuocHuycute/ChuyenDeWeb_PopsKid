package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.Type;

public interface TypeRepository extends JpaRepository<Type, Long> {
    Type findByName(String name);
}
