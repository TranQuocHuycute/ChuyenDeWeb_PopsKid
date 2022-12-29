package tv.dzerok1.popskids;

import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import tv.dzerok1.popskids.domain.Role;
import tv.dzerok1.popskids.domain.User;
import tv.dzerok1.popskids.model.*;
import tv.dzerok1.popskids.service.CourseService;
import tv.dzerok1.popskids.service.UserService;
import tv.dzerok1.popskids.service.VideoService;

import java.util.ArrayList;

@SpringBootApplication
public class PopsKidsApplication {

    public static void main(String[] args) {
        SpringApplication.run(PopsKidsApplication.class, args);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CommandLineRunner run(UserService userService, VideoService videoService, CourseService courseService) {
        return args -> {
            userService.saveRole(new Role(null, "ROLE_USER"));
            userService.saveRole(new Role(null, "ROLE_TEACHER"));
            userService.saveRole(new Role(null, "ROLE_MANAGER"));
            userService.saveRole(new Role(null, "ROLE_ADMIN"));
            userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));

            User user = userService.saveUser(new User(null, "John Travolta", "john", "1234", null, new ArrayList<>(), new ArrayList<>()));
            User user1 = userService.saveUser(new User(null, "Will Smith", "will", "1234", null, new ArrayList<>(), new ArrayList<>()));
            userService.saveUser(new User(null, "Jim Carry", "jim@gmail.com", "1234", null, new ArrayList<>(), new ArrayList<>()));
            userService.saveUser(new User(null, "Arnold Schwarzenegger", "arnold", "1234", null, new ArrayList<>(), new ArrayList<>()));
            userService.saveUser(new User(null, "Tom Cruise", "tom", "1234", null, new ArrayList<>(), new ArrayList<>()));
            userService.saveUser(new User(null, "Bruce Willis", "bruce", "1234", null, new ArrayList<>(), new ArrayList<>()));
            userService.saveUser(new User(null, "Admin", "admin", "admin", null, new ArrayList<>(), new ArrayList<>()));

            userService.addRoleToUser("john", "ROLE_USER");
            userService.addRoleToUser("will", "ROLE_USER");
            userService.addRoleToUser("will", "ROLE_TEACHER");
            userService.addRoleToUser("jim@gmail.com", "ROLE_MANAGER");
            userService.addRoleToUser("arnold", "ROLE_ADMIN");
            userService.addRoleToUser("tom", "ROLE_USER");
            userService.addRoleToUser("tom", "ROLE_TEACHER");
            userService.addRoleToUser("tom", "ROLE_MANAGER");
            userService.addRoleToUser("tom", "ROLE_ADMIN");
            userService.addRoleToUser("tom", "ROLE_SUPER_ADMIN");
            userService.addRoleToUser("bruce", "ROLE_USER");
            userService.addRoleToUser("bruce", "ROLE_TEACHER");
            userService.addRoleToUser("bruce", "ROLE_MANAGER");
            userService.addRoleToUser("admin", "ROLE_USER");
            userService.addRoleToUser("admin", "ROLE_TEACHER");
            userService.addRoleToUser("admin", "ROLE_MANAGER");
            userService.addRoleToUser("admin", "ROLE_ADMIN");
            userService.addRoleToUser("admin", "ROLE_SUPER_ADMIN");


            videoService.addCategory(new Category(null, "HappyLearning"));
            videoService.addCategory(new Category(null, "Entertainment"));
            videoService.addCategory(new Category(null, "Music"));


            videoService.addCountry(new Country(null, "USA"));
            videoService.addCountry(new Country(null, "UK"));
            videoService.addCountry(new Country(null, "France"));
            videoService.addCountry(new Country(null, "Japan"));
            videoService.addCountry(new Country(null, "Vietnam"));

            videoService.addType(new Type(null, "Movie"));
            videoService.addType(new Type(null, "Series"));
            videoService.addType(new Type(null, "Cartoon"));
            videoService.addType(new Type(null, "Music"));


            Video video = videoService.addVideo(new Video(null,
                                                          "Doraemon S10 Số một",
                                                          "Chú mèo máy đến từ tương lai, Doremon, Đôrêmon",
                                                          "2013",
                                                          "25",
                                                          "7",
                                                          "TV Asahi VN",
                                                          "a",
                                                          new ArrayList<>(),
                                                          new ArrayList<>(),
                                                          new ArrayList<>(),
                                                          new ArrayList<>()));
            Video video1 = videoService.addVideo(new Video(null,
                                                           "Doraemon S10 Số Hai",
                                                           "Chú mèo máy đến từ tương lai, Doremon, Đôrêmon",
                                                           "2013",
                                                           "25",
                                                           "7",
                                                           "TV Asahi VN",
                                                           "a",
                                                           new ArrayList<>(),
                                                           new ArrayList<>(),
                                                           new ArrayList<>(),
                                                           new ArrayList<>()));


            Video video2 = videoService.addVideo(new Video(null,
                                                           "Con cò bé bé",
                                                           "Nhạc cho bé ",
                                                           "2015",
                                                           "23",
                                                           "7",
                                                           "Music Kid",
                                                           "  cho khán giả những hình ảnh hoạt họa rất đẹp" +
                                                                   "\n" +
                                                                   "Nếu bạn đang muốn tìm xem ca khúc Con cò bé bé Mầm Chồi Lá thì có thể truy cập POPS Kids để theo dõi bất cứ lúc nào",
                                                           new ArrayList<>(),
                                                           new ArrayList<>(),
                                                           new ArrayList<>(),
                                                           new ArrayList<>()));
            Video video3 = videoService.addVideo(new Video(null,
                                                           "Chuyến Tàu Giáng Sinh",
                                                           "Nhạc giáng sinh hay nhất",
                                                           "2019",
                                                           "15",
                                                           "7",
                                                           "TV Kids VN",
                                                           "nhạc thiếu nhi Mầm Chồi Lá!",
                                                           new ArrayList<>(),
                                                           new ArrayList<>(),
                                                           new ArrayList<>(),
                                                           new ArrayList<>()));

            videoService.addEp(new Ep(null,
                                      video.getId(),
                                      1,
                                      "Kỳ nghỉ hè với mấy con ma",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://www.youtube.com/watch?v=xaDl80P6GoA"));
            videoService.addEp(new Ep(null,
                                      video.getId(),
                                      2,
                                      "Hãy tạo ra cánh cửa thần kỳ nào!",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://www.youtube.com/watch?v=xaDl80P6GoA"));

            videoService.addEp(new Ep(null,
                                      video1.getId(),
                                      1,
                                      "Đầu máy con người",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://www.youtube.com/watch?v=xaDl80P6GoA"));
            videoService.addEp(new Ep(null,
                                      video1.getId(),
                                      2,
                                      "Kế hoạch trốn khỏi trái đất",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://www.youtube.com/watch?v=xaDl80P6GoA"));

            videoService.addEp(new Ep(null,
                                      video2.getId(),
                                      1,
                                      "Con cò bé bé",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://youtu.be/jO2vrSXVDo0"));
            videoService.addEp(new Ep(null,
                                      video2.getId(),
                                      2,
                                      "Con heo đất",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://youtu.be/QKoTb2g-WjE"));

            videoService.addEp(new Ep(null,
                                      video3.getId(),
                                      1,
                                      "Chuyến Tàu Giáng Sinh",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/new_cocomelon_mothers_day_breakfast_horizontal-c0e7d0d527ca-1644289838610-JAyxtwIJ.jpg?v=0&maxW=320&format=webp",
                                      "youtube.com/watch?v=HcvB7dXApc0"));
            videoService.addEp(new Ep(null,
                                      video3.getId(),
                                      2,
                                      "Jingle Bells",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/mam_choi_la_2022_hoat_hinh_tap_8_horizontal-14a66d836cd6-1670817132264-xrflgbJh.jpg?v=0&maxW=320&format=webp",
                                      "https://www.youtube.com/watch?v=LnEtlC4QzQM"));


            videoService.addCategoryToVideo(video.getId(), "Entertainment");
            videoService.addCountryToVideo(video.getId(), "Japan");
            videoService.addTypeToVideo(video.getId(), "Cartoon");

            videoService.addCategoryToVideo(video1.getId(), "HappyLearning");
            videoService.addCountryToVideo(video1.getId(), "Vietnam");
            videoService.addTypeToVideo(video1.getId(), "Movie");

            videoService.addCategoryToVideo(video2.getId(), "Music");
            videoService.addCountryToVideo(video2.getId(), "Vietnam");
            videoService.addTypeToVideo(video2.getId(), "Music");

            videoService.addCategoryToVideo(video3.getId(), "Music");
            videoService.addCountryToVideo(video3.getId(), "UK");
            videoService.addTypeToVideo(video3.getId(), "Music");

            ClassSchedule classSchedule =
                    courseService.createClassSchedule(new ClassSchedule(null, 1, 8, "Thứ 7, CN - 15:00", 8, 700000L));

            Rating rating = courseService.createRating(new Rating(null, user.getId(), 5, "admin"));

            CourseCatalog courseCatalog =
                    courseService.createCourseCatalog(new CourseCatalog(null,
                                                                        "Tiếng Anh",
                                                                        "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tieng_anh-286b40d22a4d-1656059551172-KyAPqdKG.png?v=0&maxW=160&format=webp",
                                                                        "a",
                                                                        new ArrayList<>()
                    ));

            Course course =
                    courseService.createCourse(new Course(null,
                                                          "Tiếng Anh Giao Tiếp Mầm Non",
                                                          "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tt___ti_ng_nah_m_m_non-c93aaeaf6a90-1664965814874-piefd46p.png?v=0&maxW=480&format=webp",
                                                          87500L,
                                                          "Khoá học Tiếng Anh Giao Tiếp cho trẻ mầm non từ 4 đến 6 tuổi đang làm quen Tiếng Anh và phụ huynh mong muốn con được rèn luyện phát âm theo chuẩn, giao tiếp phản xạ",
                                                          "4 - 5",
                                                          "45",
                                                          "Bắt đầu sớm khi đủ học viên",
                                                          10,
                                                          "Tiếng Anh, Tiếng Việt",
                                                          2,
                                                          "Với kinh nghiệm dạy Tiếng Anh giao tiếp cho các lứa tuổi và các cấp độ",
                                                          "Kết thúc khóa học Tiếng Anh Giao Tiếp cho trẻ mầm non, bé sẽ",
                                                          "Nội dung học tập và luyện tập các kỹ năng giao tiếng Anh theo các giáo trình Quốc tế tiêu chuẩn, phù hợp lứa tuổi: First Friend",
                                                          "Sách PDF cho bé",
                                                          "Quý Phụ huynh bố trí chỗ ngồi học thoáng, yên tĩnh và đủ ánh sáng cho trẻ.",
                                                          new ArrayList<>(),
                                                          new ArrayList<>(),
                                                          new ArrayList<>()));

            courseService.addCourseToCourseCatalog(courseCatalog.getId(), course.getId());
            courseService.addClassSchedulesToCourse(course.getId(), classSchedule.getId());
            courseService.addRatingsToCourse(course.getId(), rating.getId());
            courseService.addUsersToCourse(course.getId(), user1.getUsername());
        };
    }

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper
                .getConfiguration()
                .setFieldMatchingEnabled(true)
                .setFieldAccessLevel(Configuration.AccessLevel.PRIVATE)
                .setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper;
    }
}
