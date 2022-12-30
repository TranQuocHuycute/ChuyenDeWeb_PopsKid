package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.ClassSchedule;
import tv.dzerok1.popskids.model.Course;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findDistinctByClassSchedulesIn(List<ClassSchedule> classSchedules);
}
