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
public class Type {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;
    private String name;
}
