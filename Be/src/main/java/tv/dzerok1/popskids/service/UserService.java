package tv.dzerok1.popskids.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tv.dzerok1.popskids.dao.CourseRepository;
import tv.dzerok1.popskids.dao.RoleRepository;
import tv.dzerok1.popskids.dao.UserRepository;
import tv.dzerok1.popskids.domain.Role;
import tv.dzerok1.popskids.domain.User;
import tv.dzerok1.popskids.model.Course;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public interface UserService {
    User saveUser(User user);

    Role saveRole(Role role);

    void addRoleToUser(String username, String roleName);
    void addCourseToUser(String username, Long courseId);

    User getUser(String username);

    List<User> getUsers();
    List<Course> getUserCourses(String username);
}

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
class UserServiceImpl implements UserService, UserDetailsService {
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            log.error("User not found in the database");
            throw new UsernameNotFoundException("Usernot found in the database");
        } else {
            log.info("User found in the database: {}", username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user
                .getRoles()
                .forEach(role -> {
                    authorities.add(new SimpleGrantedAuthority(role.getName()));
                });
        return new org.springframework.security.core.userdetails.User(user.getUsername(),
                                                                      user.getPassword(),
                                                                      authorities);
    }

    @Override
    public User saveUser(User user) {
        log.info("Saving new user {} to the database", user.getName());
        String phoneNumberRegex = "^\\d{10}$";
        String emailRegex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
        log.info("Checking if user {} already exists", user.getPassword());
        if (!userRepository.existsByUsername(user.getUsername())) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            if (user
                    .getUsername()
                    .matches(phoneNumberRegex) || user
                    .getUsername()
                    .matches(emailRegex)) {
                log.info("User {} saved to the database", user.getName());
                return userRepository.save(user);
            } else if (user
                    .getUsername()
                    .equals("john") || user
                    .getUsername()
                    .equals("will") || user
                    .getUsername()
                    .equals("jim") || user
                    .getUsername()
                    .equals("arnold") || user
                    .getUsername()
                    .equals("tom") || user
                    .getUsername()
                    .equals("bruce") || user
                    .getUsername()
                    .equals("admin")) {
                log.info("User {} saved to the database", user.getName());
                return userRepository.save(user);
            }
            log.error("User {} not saved to the database", user.getName());
        }
        return null;
    }

    @Override
    public Role saveRole(Role role) {
        log.info("Saving new role {} to the database", role.getName());
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        log.info("Adding role {} to user {}", roleName, username);
        User user = userRepository.findByUsername(username);
        Role role = roleRepository.findByName(roleName);
        user
                .getRoles()
                .add(role);
    }

    @Override
    public void addCourseToUser(String username, Long courseId) {
        log.info("Adding course {} to user {}", courseId, username);
        User user = userRepository.findByUsername(username);
        Course course = courseRepository.findById(courseId).get();
        user
                .getCourses()
                .add(course);
    }

    @Override
    public User getUser(String username) {
        log.info("Fetching user {}", username);
        return userRepository.findByUsername(username);
    }

    @Override
    public List<User> getUsers() {
        log.info("Fetching all users");
        return userRepository.findAll();
    }

    @Override
    public List<Course> getUserCourses(String username) {
        log.info("Fetching all courses by user {}", username);
        User user = userRepository.findByUsername(username);
        return (List<Course>) user.getCourses();
    }
}