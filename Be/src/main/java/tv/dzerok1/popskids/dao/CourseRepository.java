package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.Course;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {

    List<Course> findByCourseCatalogsId(Long id);
    List<Course> findDistinctByTitleContainingOrCourseCatalogsNameContaining(String title, String name);
}
