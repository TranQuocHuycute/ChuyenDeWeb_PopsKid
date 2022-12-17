package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.entity.Videos;

public interface VideosRepository extends JpaRepository<Videos, Long> {
}
