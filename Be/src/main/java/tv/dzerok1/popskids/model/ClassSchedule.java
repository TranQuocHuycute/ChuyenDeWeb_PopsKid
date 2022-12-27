package tv.dzerok1.popskids.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class ClassSchedule {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private int numberCourse;
    private int numberSessions;
    private String time;
    private int maximumStudents;
    private Long price;
}
