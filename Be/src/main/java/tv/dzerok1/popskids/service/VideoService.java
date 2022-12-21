package tv.dzerok1.popskids.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tv.dzerok1.popskids.dao.*;
import tv.dzerok1.popskids.model.*;

import java.util.List;

public interface VideoService {
    Video addVideo(Video video);
    Ep addEp(Ep ep);
    Type addType(Type type);
    Country addCountry(Country country);
    Category addCategory(Category category);
    void addTypeToVideo(Long id, String typeName);
    void addCountryToVideo(Long id, String countryName);
    void addCategoryToVideo(Long id, String categoryName);
    Video getVideoById(Long id);
    Ep getEpByID(Long id);
    Ep getEpByVideoIdAndEpNumber(Long videoID, Integer epNumber);
    List<Video> getVideos();
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
    public Ep addEp(Ep ep) {
        log.info("Saving new ep {} to the database", ep.getId());
        return epRepository.save(ep);
    }

    @Override
    public Type addType(Type type) {
        log.info("Saving new type {} to the database", type.getName());
        return typeRepository.save(type);
    }

    @Override
    public Country addCountry(Country country) {
        log.info("Saving new country {} to the database", country.getName());
        return countryRepository.save(country);
    }

    @Override
    public Category addCategory(Category category) {
        log.info("Saving new category {} to the database", category.getName());
        return categoryRepository.save(category);
    }

    @Override
    public void addTypeToVideo(Long id, String typeName) {
        log.info("Adding type {} to video {}", typeName, id);
        Video video = videoRepository.findById(id).get();
        Type type = typeRepository.findByName(typeName);
        video.getTypes().add(type);
    }

    @Override
    public void addCountryToVideo(Long id, String countryName) {
        log.info("Adding country {} to video {}", countryName, id);
        Video video = videoRepository.findById(id).get();
        Country country = countryRepository.findByName(countryName);
        video.getCountries().add(country);
    }

    @Override
    public void addCategoryToVideo(Long id, String categoryName) {
        log.info("Adding category {} to video {}", categoryName, id);
        Video video = videoRepository.findById(id).get();
        Category category = categoryRepository.findByName(categoryName);
        video.getCategories().add(category);
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