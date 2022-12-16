package tv.dzerok1.popskids.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tv.dzerok1.popskids.dao.EpsRepository;
import tv.dzerok1.popskids.dao.VideosRepository;
import tv.dzerok1.popskids.entity.Videos;
import tv.dzerok1.popskids.modal.VideoEpRequestDTO;

@RestController
public class VideoEpController {
    @Autowired
    private VideosRepository videosRepository;

    @Autowired
    private EpsRepository epsRepository;

    @PostMapping("api/video")
    public Videos placeOrder(@RequestBody VideoEpRequestDTO videoEpRequest) {
        return videosRepository.save(videoEpRequest.getVideo());
    }

    @GetMapping("api/videos")
    public Iterable<Videos> getVideos() {
        return videosRepository.findAll();
    }
}
