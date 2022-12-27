package tv.dzerok1.popskids.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tv.dzerok1.popskids.dao.*;
import tv.dzerok1.popskids.model.*;

import java.util.List;
import java.util.Optional;

public interface VideoService {
    Video addVideo(Video video);
    void addEp(Ep ep);
    void addType(Type type);
    void addCountry(Country country);
    void addCategory(Category category);
    void addTypeToVideo(Long id, String typeName);
    void addCountryToVideo(Long id, String countryName);
    void addCategoryToVideo(Long id, String categoryName);
    void deleteVideo(Long id);
    void updateVideo(Long videoId, Video videoDetails);
    Video getVideoById(Long id);
    Ep getEpByID(Long id);
    Ep getEpByVideoIdAndEpNumber(Long videoID, Integer epNumber);
    List<Video> getVideos();

    List<Video> getVideosByCategoryID(Long id);

    List<Video> searchVideos(String key);
    List<Ep>  getEpsByVideoId(Long videoId);
    List<Type> getTypes();
    List<Country> getCountries();
    List<Category> getCategories();
}
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
class VideoServiceImpl implements VideoService {
    private final VideoRepository videoRepository;
    private final EpRepository epRepository;
    private final TypeRepository typeRepository;
    private final CountryRepository countryRepository;
    private final CategoryRepository categoryRepository;

    @Override
    public Video addVideo(Video video) {
        log.info("Saving new video {} to the database", video.getTitle());
        return videoRepository.save(video);
    }

    @Override
    public void addEp(Ep ep) {
        log.info("Saving new ep {} to the database", ep.getId());
        epRepository.save(ep);
    }

    @Override
    public void addType(Type type) {
        log.info("Saving new type {} to the database", type.getName());
        typeRepository.save(type);
    }

    @Override
    public void addCountry(Country country) {
        log.info("Saving new country {} to the database", country.getName());
        countryRepository.save(country);
    }

    @Override
    public void addCategory(Category category) {
        log.info("Saving new category {} to the database", category.getName());
        categoryRepository.save(category);
    }

    @Override
    public void addTypeToVideo(Long id, String typeName) {
        log.info("New Adding type {} to video {}", typeName.replaceAll("\"", ""), id);
        Video video = videoRepository.findById(id).get();
        Type type = typeRepository.findByName(typeName.replaceAll("\"", ""));
        video.getTypes().add(type);
    }

    @Override
    public void addCountryToVideo(Long id, String countryName) {
        log.info("Adding country {} to video {}", countryName, id);
        Video video = videoRepository.findById(id).get();
        Country country = countryRepository.findByName(countryName.replaceAll("\"", ""));
        video.getCountries().add(country);
    }

    @Override
    public void addCategoryToVideo(Long id, String categoryName) {
        log.info("Adding category {} to video {}", categoryName, id);
        Video video = videoRepository.findById(id).get();
        Category category = categoryRepository.findByName(categoryName.replaceAll("\"", ""));
        video.getCategories().add(category);
    }

    @Override
    public void deleteVideo(Long id) {
        log.info("Deleting video with id {}", id);
        videoRepository.deleteById(id);
    }

    @Override
    public void updateVideo(Long videoId, Video videoDetails) {
        Video video = videoRepository.findById(videoId).get();
        log.info("Updating video with id {}", videoDetails);

        video.setTitle(videoDetails.getTitle());
        video.setAnother_name(videoDetails.getAnother_name());
        video.setRelease_year(videoDetails.getRelease_year());
        video.setTime(videoDetails.getTime());
        video.setRating(videoDetails.getRating());
        video.setContent_by(videoDetails.getContent_by());
        video.setDescription(videoDetails.getDescription());
        video.setCategories(videoDetails.getCategories());
        video.setCountries(videoDetails.getCountries());
        video.setTypes(videoDetails.getTypes());

        videoRepository.save(video);
    }

    @Override
    public Video getVideoById(Long id) {
        log.info("Getting video by id {}", id);
        return videoRepository.findById(id).get();
    }

    @Override
    public Ep getEpByID(Long epId) {
        log.info("Getting ep by id {}", epId);
        return epRepository.findByVideoId(epId);
    }

    @Override
    public Ep getEpByVideoIdAndEpNumber(Long videoID, Integer epNumber) {
        log.info("Getting ep by video id {} and ep number {}", videoID, epNumber);
        return epRepository.findByVideoIdAndEpNumber(videoID, epNumber);
    }

    @Override
    public List<Video> getVideos() {
        log.info("Getting all videos");
        return videoRepository.findAll();
    }

    @Override

    public List<Video> getVideosByCategoryID(Long id) {
        log.info("Getting all avideos by categories id {}", id);
        return videoRepository.findByCategoriesId(id);
    }

    @Override

    public List<Video> searchVideos(String key) {
        return videoRepository.findDistinctByTitleContainingOrEpsTitleContaining(key, key);
    }

    @Override
    public List<Ep> getEpsByVideoId(Long videoId) {
        log.info("Getting all eps by video id {}", videoId);
        return epRepository.findAllByVideoId(videoId);
    }

    @Override
    public List<Type> getTypes() {
        log.info("Getting all types");
        return typeRepository.findAll();
    }

    @Override
    public List<Country> getCountries() {
        log.info("Getting all countries");
        return countryRepository.findAll();
    }

    @Override
    public List<Category> getCategories() {
        log.info("Getting all categories");
        return categoryRepository.findAll();
    }


}