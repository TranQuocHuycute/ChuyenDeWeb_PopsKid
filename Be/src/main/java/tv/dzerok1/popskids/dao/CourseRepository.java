package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
