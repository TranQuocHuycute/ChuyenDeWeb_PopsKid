package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.Rating;

public interface RatingRepository extends JpaRepository<Rating, Long> {

}
