package tv.dzerok1.popskids.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Videos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String another_name;

    private int type;

    private int country;

    private String release_year;

    private int time;

    private int rating;

    private int category;

    private String content_by;

    private String description;

    @OneToMany(targetEntity = Eps.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "video_id", referencedColumnName = "id")
    @ToString.Exclude
    private List<Eps> eps;
}
