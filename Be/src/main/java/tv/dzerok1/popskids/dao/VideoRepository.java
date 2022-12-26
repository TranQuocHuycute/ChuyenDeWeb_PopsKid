package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.Video;

import java.util.List;

public interface VideoRepository extends JpaRepository<Video, Long> {
    List<Video> findDistinctByTitleContainingOrEpsTitleContaining(String title, String epsTitle);
}
