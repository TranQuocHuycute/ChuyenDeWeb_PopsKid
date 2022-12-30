package tv.dzerok1.popskids.domain;

import lombok.*;
import tv.dzerok1.popskids.model.ClassSchedule;
import tv.dzerok1.popskids.model.Course;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

import static javax.persistence.FetchType.EAGER;
import static javax.persistence.GenerationType.*;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private String name;
    private String username;
    private String password;
    private String information;

    @ManyToMany(fetch = EAGER)
    private Collection<Role> roles = new ArrayList<>();

    @ManyToMany(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            }
    )
    private Collection<ClassSchedule> classSchedules = new ArrayList<>();
}
