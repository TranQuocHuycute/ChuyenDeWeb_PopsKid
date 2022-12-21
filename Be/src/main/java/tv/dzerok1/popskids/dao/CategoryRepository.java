package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByName(String name);
}
