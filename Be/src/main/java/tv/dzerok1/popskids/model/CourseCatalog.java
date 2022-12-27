package tv.dzerok1.popskids.model;

import lombok.*;

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
public class CourseCatalog {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private String name;
    private String avatar;
    private String description;

}
