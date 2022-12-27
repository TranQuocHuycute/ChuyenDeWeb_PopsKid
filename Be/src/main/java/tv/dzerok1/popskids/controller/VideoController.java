package tv.dzerok1.popskids.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tv.dzerok1.popskids.model.Category;
import tv.dzerok1.popskids.model.Country;
import tv.dzerok1.popskids.model.Type;
import tv.dzerok1.popskids.model.Video;
import tv.dzerok1.popskids.service.VideoService;

import javax.validation.Valid;
import java.util.List;
import tv.dzerok1.popskids.model.Ep;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class VideoController {
    private final VideoService videoService;

    @PostMapping("/videos/add")
    public ResponseEntity<Video> addVideo(@RequestBody Video video) {
        return ResponseEntity.ok(videoService.addVideo(video));
    }


    @DeleteMapping("/videos/delete/{id}")
    public ResponseEntity<Void> deleteVideo(@PathVariable Long id) {
        videoService.deleteVideo(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/videos/update/{id}")
    public ResponseEntity<Void> updateVideo(@PathVariable(value = "id") Long videoId,
                                            @Valid @RequestBody Video videoDetails) {
        videoService.updateVideo(videoId, videoDetails);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/videos/{id}/type")
    public ResponseEntity<Void> addTypeToVideo(@PathVariable Long id, @RequestBody String typeName) {
        videoService.addTypeToVideo(id, typeName);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/videos/{id}/country")
    public ResponseEntity<Void> addCountryToVideo(@PathVariable Long id, @RequestBody String countryName) {
        videoService.addCountryToVideo(id, countryName);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/videos/{id}/category")
    public ResponseEntity<Void> addCategoryToVideo(@PathVariable Long id, @RequestBody String categoryName) {
        videoService.addCategoryToVideo(id, categoryName);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/videos")
    public ResponseEntity<List<Video>> getVideos() {
        List<Video> videos = videoService.getVideos();
        return ResponseEntity.ok()
                             .body(videos);
    }

    @GetMapping("/videos/{id}")
    public ResponseEntity<Video> getVideoByID(@PathVariable Long id) {
        Video video = videoService.getVideoById(id);
        return ResponseEntity.ok()
                .body(video);
    }

    @GetMapping("/videos/{videoId}/{epNumber}")
    public ResponseEntity<Ep> getEpByVideoId(@PathVariable Long videoId,@PathVariable Integer epNumber) {
        return ResponseEntity.ok().body(videoService.getEpByVideoIdAndEpNumber(videoId, epNumber));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Video>> search(@RequestParam String key) {
        return ResponseEntity.ok().body(videoService.searchVideos(key));
    }

    @GetMapping("/videos/categories/{id}")
    public ResponseEntity<List<Video>> getCategoriesById(@PathVariable Long id) {
        return ResponseEntity.ok().body(videoService.getVideosByCategoryID(id));
    }

    @GetMapping("/types")
    public ResponseEntity<List<Type>> getTypes() {
        return ResponseEntity.ok()
                             .body(videoService.getTypes());
    }

    @GetMapping("/countries")
    public ResponseEntity<List<Country>> getCountries() {
        return ResponseEntity.ok()
                             .body(videoService.getCountries());
    }

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getCategories() {
        return ResponseEntity.ok()
                             .body(videoService.getCategories());
    }

}
