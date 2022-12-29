package tv.dzerok1.popskids.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tv.dzerok1.popskids.model.Course;
import tv.dzerok1.popskids.model.CourseCatalog;
import tv.dzerok1.popskids.model.Rating;
import tv.dzerok1.popskids.service.CourseService;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CourseController {
    private final CourseService courseService;

    @GetMapping("/courses/search")
    public ResponseEntity<List<CourseCatalog>> searchCourses(@RequestParam String key) {
        return ResponseEntity.ok(courseService.searchCourseCatalogByNameOrCourseTitle(key));
    }

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getVideos() {
        return ResponseEntity
                .ok()
                .body(courseService.getAllCourse());
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getVideo(@PathVariable Long id) {
        return ResponseEntity
                .ok()
                .body(courseService.getCourseById(id));
    }

    @GetMapping("/courses/catalogs")
    public ResponseEntity<List<CourseCatalog>> getVideosByCatalog() {
        return ResponseEntity
                .ok()
                .body(courseService.getAllCourseCatalog());
    }

    @GetMapping("/courses/catalogs/{id}")
    public ResponseEntity<CourseCatalog> getVideosByCatalogId(@PathVariable Long id) {
        return ResponseEntity
                .ok()
                .body(courseService.getCourseCatalogById(id));
    }

    @PostMapping("/courses/{id}/add/teacher")
    public ResponseEntity<Void> addTeacherToCourse(@PathVariable Long id, @RequestBody String teacherName) {
        courseService.addUsersToCourse(id, teacherName);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/courses/{id}/add/rating")
    public ResponseEntity<Void> addRatingToCourse(@PathVariable Long id, @RequestBody Rating rating) {
        Rating ratingTmp = courseService.createRating(rating);
        courseService.addRatingsToCourse(id, ratingTmp.getId());
        return ResponseEntity.ok().build();
    }
}