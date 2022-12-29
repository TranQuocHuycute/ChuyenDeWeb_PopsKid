package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.CourseCatalog;

import java.util.List;

public interface CourseCatalogRepository extends JpaRepository<CourseCatalog, Long> {
    List<CourseCatalog> findDistinctByNameContainingOrCoursesTitleContaining(String name, String title);
}
