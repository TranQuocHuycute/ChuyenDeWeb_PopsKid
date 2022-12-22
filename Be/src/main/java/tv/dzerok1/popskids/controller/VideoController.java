package tv.dzerok1.popskids.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tv.dzerok1.popskids.model.Ep;
import tv.dzerok1.popskids.model.Video;
import tv.dzerok1.popskids.service.VideoService;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class VideoController {
    private final VideoService videoService;

    @GetMapping("/videos")
    public ResponseEntity<List<Video>> getVideos() {
        return ResponseEntity.ok()
                             .body(videoService.getVideos());
    }

    @GetMapping("/videos/{videoId}/{epNumber}")
    public ResponseEntity<Ep> getEpByVideoId(@PathVariable Long videoId,@PathVariable Integer epNumber) {
        return ResponseEntity.ok().body(videoService.getEpByVideoIdAndEpNumber(videoId, epNumber));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Video>> search(@RequestParam String key) {
        return ResponseEntity.ok().body(videoService.searchVideos(key));
    }
}
