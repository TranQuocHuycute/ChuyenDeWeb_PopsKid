package tv.dzerok1.popskids.model;

import lombok.*;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.Collection;

import static javax.persistence.FetchType.EAGER;
import static javax.persistence.GenerationType.AUTO;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class Video {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private String title;

    private String another_name;

    private String release_year;

    private String time;

    private String rating;


    private String content_by;

    private String description;

    @ManyToMany(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            }
    )
    private Collection<Category> categories = new ArrayList<>();

    @ManyToMany(
            cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
            }
    )
    private Collection<Country> countries = new ArrayList<>();

    @OneToMany(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            }
    )
    private Collection<Type> types = new ArrayList<>();

    @OneToMany
    @JoinColumn(name = "video_id", referencedColumnName = "id")
    private Collection<Ep> eps = new ArrayList<>();
}
