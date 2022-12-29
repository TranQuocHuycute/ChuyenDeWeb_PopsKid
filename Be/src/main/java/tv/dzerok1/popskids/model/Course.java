package tv.dzerok1.popskids.model;

import lombok.*;
import tv.dzerok1.popskids.domain.User;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.Collection;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private String title;
    private String thumbnail;
    private Long price;
    private String description;
    private String age;
    private String time;
    private String startTime ;
    private int numberPeople;
    private String language;
    private int classPeriod;
    private String GeneralInformation;
    private String wilLearn;
    private String contentCurriculum;
    private String materialsTools;
    private String note;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "course_user",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Collection<User> users = new ArrayList<>();

//    @ManyToMany(
//            cascade = {
//                    CascadeType.PERSIST,
//                    CascadeType.MERGE
//            }
//    )
//    private Collection<User> users = new ArrayList<>();

    @ManyToMany(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            }
    )
    private Collection<ClassSchedule> classSchedules = new ArrayList<>();

    @OneToMany(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            }
    )
    private Collection<Rating> ratings = new ArrayList<>();
}
