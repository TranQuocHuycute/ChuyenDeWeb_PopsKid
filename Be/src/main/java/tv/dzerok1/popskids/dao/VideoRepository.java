package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.Video;

public interface VideoRepository extends JpaRepository<Video, Long> {
}
