package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.Ep;

import java.util.List;
import java.util.Optional;

public interface EpRepository extends JpaRepository<Ep, Long> {
    Ep findByVideoId(Long id);
    Ep findByVideoIdAndEpNumber(Long id, Integer ep_number);

    List<Ep> findAllByVideoId(Long id);
}
