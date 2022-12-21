package tv.dzerok1.popskids.model;

import lombok.*;

import javax.persistence.Column;
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
public class Ep {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    @Column(name = "video_id")
    private Long videoId;
    private Integer epNumber;
    private String title;

    private String thumbnail;

    private String url;
}
