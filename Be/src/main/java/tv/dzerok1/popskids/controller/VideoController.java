package tv.dzerok1.popskids.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tv.dzerok1.popskids.model.Category;
import tv.dzerok1.popskids.model.Ep;
import tv.dzerok1.popskids.model.Video;
import tv.dzerok1.popskids.service.VideoService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class VideoController {
    private final VideoService videoService;

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
    public ResponseEntity<List<Video>> search(@PathVariable Long id) {
        return ResponseEntity.ok().body(videoService.getVideosByCategoryID(id));
    }
}
