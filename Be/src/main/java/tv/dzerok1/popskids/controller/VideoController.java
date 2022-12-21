package tv.dzerok1.popskids.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tv.dzerok1.popskids.model.Video;
import tv.dzerok1.popskids.service.VideoService;

import java.util.List;

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
}
