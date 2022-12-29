package tv.dzerok1.popskids.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tv.dzerok1.popskids.dao.*;
import tv.dzerok1.popskids.domain.User;
import tv.dzerok1.popskids.model.ClassSchedule;
import tv.dzerok1.popskids.model.Course;
import tv.dzerok1.popskids.model.CourseCatalog;
import tv.dzerok1.popskids.model.Rating;

import java.util.List;

public interface CourseService {
    Course createCourse(Course course);
    Course updateCourse(Course course);
    Course deleteCourseById(Long id);
    Course getCourseById(Long id);
    List<Course> getAllCourse();

    ClassSchedule createClassSchedule(ClassSchedule classSchedule);
    ClassSchedule updateClassSchedule(ClassSchedule classSchedule);
    ClassSchedule deleteClassScheduleById(Long id);
    ClassSchedule getClassScheduleById(Long id);
    List<ClassSchedule> getAllClassSchedule();

    Rating createRating(Rating rating);
    Rating updateRating(Rating rating);
    Rating deleteRatingById(Long id);
    Rating getRatingById(Long id);
    List<Rating> getAllRating();

    CourseCatalog createCourseCatalog(CourseCatalog courseCatalog);
    CourseCatalog updateCourseCatalog(CourseCatalog courseCatalog);
    CourseCatalog deleteCourseCatalogById(Long id);
    CourseCatalog getCourseCatalogById(Long id);
    List<CourseCatalog> getAllCourseCatalog();
    CourseCatalog getCourseCatalogByIds(Long id);
    List<CourseCatalog> searchCourseCatalogByNameOrCourseTitle(String key);

    void addUsersToCourse(Long courseId, String username);
    void addClassSchedulesToCourse(Long courseId, Long classScheduleId);
    void addRatingsToCourse(Long courseId, Long ratingId);
    void addCourseToCourseCatalog(Long courseCatalogId, Long courseId);

}

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
class CourseServiceImpl implements CourseService {
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final ClassScheduleRepository classScheduleRepository;
    private final RatingRepository ratingRepository;
    private final CourseCatalogRepository courseCatalogRepository;

    @Override
    public Course createCourse(Course course) {
        log.info("Saving new course {} to the database", course.getTitle());
        return courseRepository.save(course);
    }

    @Override
    public Course updateCourse(Course course) {
        log.info("Updating course {} to the database", course.getTitle());
        return courseRepository.save(course);
    }

    @Override
    public Course deleteCourseById(Long id) {
        log.info("Deleting course {} from the database", id);
        Course course = courseRepository.findById(id).orElseThrow(() -> new RuntimeException("Course not found"));
        courseRepository.deleteById(id);
        return course;
    }

    @Override
    public Course getCourseById(Long id) {
        log.info("Getting course {} from the database", id);
        return courseRepository.findById(id).orElseThrow(() -> new RuntimeException("Course not found"));
    }

    @Override
    public List<Course> getAllCourse() {
        log.info("Getting all courses from the database");
        return courseRepository.findAll();
    }

    @Override
    public ClassSchedule createClassSchedule(ClassSchedule classSchedule) {
        log.info("Saving new classSchedule {} to the database", classSchedule.getId());
        return classScheduleRepository.save(classSchedule);
    }


    @Override
    public ClassSchedule updateClassSchedule(ClassSchedule classSchedule) {
        log.info("Updating classSchedule {} to the database", classSchedule.getId());
        return classScheduleRepository.save(classSchedule);
    }

    @Override
    public ClassSchedule deleteClassScheduleById(Long id) {
        log.info("Deleting classSchedule {} from the database", id);
        ClassSchedule classSchedule = classScheduleRepository.findById(id).orElseThrow(() -> new RuntimeException("ClassSchedule not found"));
        classScheduleRepository.deleteById(id);
        return classSchedule;
    }

    @Override
    public ClassSchedule getClassScheduleById(Long id) {
        log.info("Getting classSchedule {} from the database", id);
        return classScheduleRepository.findById(id).orElseThrow(() -> new RuntimeException("ClassSchedule not found"));
    }

    @Override
    public List<ClassSchedule> getAllClassSchedule() {
        log.info("Getting all classSchedules from the database");
        return classScheduleRepository.findAll();
    }

    @Override
    public Rating createRating(Rating rating) {
        log.info("Saving new rating {} to the database", rating.getId());
        return ratingRepository.save(rating);
    }

    @Override
    public Rating updateRating(Rating rating) {
        log.info("Updating rating {} to the database", rating.getId());
        return ratingRepository.save(rating);
    }

    @Override
    public Rating deleteRatingById(Long id) {
        log.info("Deleting rating {} from the database", id);
        Rating rating = ratingRepository.findById(id).orElseThrow(() -> new RuntimeException("Rating not found"));
        ratingRepository.deleteById(id);
        return rating;
    }

    @Override
    public Rating getRatingById(Long id) {
        log.info("Getting rating {} from the database", id);
        return ratingRepository.findById(id).orElseThrow(() -> new RuntimeException("Rating not found"));
    }

    @Override
    public List<Rating> getAllRating() {
        log.info("Getting all ratings from the database");
        return ratingRepository.findAll();
    }

    @Override
    public CourseCatalog createCourseCatalog(CourseCatalog courseCatalog) {
        log.info("Saving new courseCatalog {} to the database", courseCatalog.getId());
        return courseCatalogRepository.save(courseCatalog);
    }

    @Override
    public CourseCatalog updateCourseCatalog(CourseCatalog courseCatalog) {
        log.info("Updating courseCatalog {} to the database", courseCatalog.getId());
        return courseCatalogRepository.save(courseCatalog);
    }

    @Override
    public CourseCatalog deleteCourseCatalogById(Long id) {
        log.info("Deleting courseCatalog {} from the database", id);
        CourseCatalog courseCatalog = courseCatalogRepository.findById(id).orElseThrow(() -> new RuntimeException("CourseCatalog not found"));
        courseCatalogRepository.deleteById(id);
        return courseCatalog;
    }

    @Override
    public CourseCatalog getCourseCatalogById(Long id) {
        log.info("Getting courseCatalog {} from the database", id);
        return courseCatalogRepository.findById(id).orElseThrow(() -> new RuntimeException("CourseCatalog not found"));
    }

    @Override
    public List<CourseCatalog> getAllCourseCatalog() {
        log.info("Getting all courseCatalogs from the database");
        return courseCatalogRepository.findAll();
    }

    @Override
    public CourseCatalog getCourseCatalogByIds(Long id) {
        return courseCatalogRepository.findById(id).orElseThrow(() -> new RuntimeException("CourseCatalog not found"));
    }

    @Override
    public List<CourseCatalog> searchCourseCatalogByNameOrCourseTitle(String key) {
        return courseCatalogRepository.findDistinctByNameContainingOrCoursesTitleContaining(key, key);
    }

    @Override
    public void addUsersToCourse(Long courseId, String username) {
        log.info("Adding user {} to course {}", username, courseId);
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course not found"));
        User user = userRepository.findByUsername(username);
        course.getUsers().add(user);
//        courseRepository.save(course);

    }

    @Override
    public void addClassSchedulesToCourse(Long courseId, Long classScheduleId) {
        log.info("Adding classSchedule {} to course {}", classScheduleId, courseId);
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course not found"));
        ClassSchedule classSchedule = classScheduleRepository.findById(classScheduleId).orElseThrow(() -> new RuntimeException("ClassSchedule not found"));
        course.getClassSchedules().add(classSchedule);

    }

    @Override
    public void addRatingsToCourse(Long courseId, Long ratingId) {
        log.info("Adding rating {} to course {}", ratingId, courseId);
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course not found"));
        Rating rating = ratingRepository.findById(ratingId).orElseThrow(() -> new RuntimeException("Rating not found"));
        course.getRatings().add(rating);

    }

    @Override
    public void addCourseToCourseCatalog(Long courseCatalogId, Long courseId) {
        log.info("Adding course {} to courseCatalog {}", courseId, courseCatalogId);
        CourseCatalog courseCatalog = courseCatalogRepository.findById(courseCatalogId).orElseThrow(() -> new RuntimeException("CourseCatalog not found"));
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course not found"));
        courseCatalog.getCourses().add(course);
    }

//    @Override
//    public void addCourseCatalogsToCourse(Long courseId, Long courseCatalogId) {
//        log.info("Adding courseCatalog {} to course {}", courseCatalogId, courseId);
//        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course not found"));
//        CourseCatalog courseCatalog = courseCatalogRepository.findById(courseCatalogId).orElseThrow(() -> new RuntimeException("CourseCatalog not found"));
//        course.getCourseCatalogs().add(courseCatalog);
//
//    }
}