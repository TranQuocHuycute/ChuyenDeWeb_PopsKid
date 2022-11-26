package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
}
