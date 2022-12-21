package tv.dzerok1.popskids.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tv.dzerok1.popskids.domain.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
