package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.ClassSchedule;

import java.util.List;

public interface ClassScheduleRepository extends JpaRepository<ClassSchedule, Long> {
}
