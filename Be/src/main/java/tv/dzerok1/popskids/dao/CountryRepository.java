package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.model.Country;

public interface CountryRepository extends JpaRepository<Country, Long> {
    Country findByName(String name);
}
