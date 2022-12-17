package tv.dzerok1.popskids.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tv.dzerok1.popskids.dao.EpsRepository;
import tv.dzerok1.popskids.dao.VideosRepository;
import tv.dzerok1.popskids.entity.Videos;
import tv.dzerok1.popskids.entity.Eps;
import tv.dzerok1.popskids.modal.VideoEpRequestDTO;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @GetMapping("api/video/{id}")
    public Videos getVideoById(@PathVariable Long id) {
        return videosRepository.findById(id).get();
    }

    @GetMapping("api/eps/{id}")
    public Eps getEpById(@PathVariable Long id) {
        return epsRepository.findById(id).get();
    }
}
