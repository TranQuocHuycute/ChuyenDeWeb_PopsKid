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

            User user = userService.saveUser(new User(null,
                                                      "John Travolta",
                                                      "john",
                                                      "1234",
                                                      null,
                                                      new ArrayList<>(),
                                                      new ArrayList<>()));
            User user1 = userService.saveUser(new User(null,
                                                       "Will Smith",
                                                       "will",
                                                       "1234",
                                                       null,
                                                       new ArrayList<>(),
                                                       new ArrayList<>()));

            userService.saveUser(new User(null,
                                          "Jim Carry",
                                          "jim@gmail.com",
                                          "1234",
                                          null,
                                          new ArrayList<>(),
                                          new ArrayList<>()));
            userService.saveUser(new User(null,
                                          "Arnold Schwarzenegger",
                                          "arnold",
                                          "1234",
                                          null,
                                          new ArrayList<>(),
                                          new ArrayList<>()));
            userService.saveUser(new User(null,
                                          "Tom Cruise",
                                          "tom",
                                          "1234",
                                          null,
                                          new ArrayList<>(),
                                          new ArrayList<>()));
            userService.saveUser(new User(null,
                                          "Bruce Willis",
                                          "bruce",
                                          "1234",
                                          null,
                                          new ArrayList<>(),
                                          new ArrayList<>()));
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
                                                          "Doraemon S10 S??? m???t",
                                                          "Ch?? m??o m??y ?????n t??? t????ng lai, Doremon, ????r??mon",
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
                                                           "Doraemon S10 S??? Hai",
                                                           "Ch?? m??o m??y ?????n t??? t????ng lai, Doremon, ????r??mon",
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
                                                           "Con c?? b?? b??",
                                                           "Nh???c cho b?? ",
                                                           "2015",
                                                           "23",
                                                           "7",
                                                           "Music Kid",
                                                           "  cho kh??n gi??? nh???ng h??nh ???nh ho???t h???a r???t ?????p" +
                                                                   "\n" +
                                                                   "N???u b???n ??ang mu???n t??m xem ca kh??c Con c?? b?? b?? M???m Ch???i L?? th?? c?? th??? truy c???p POPS Kids ????? theo d??i b???t c??? l??c n??o",
                                                           new ArrayList<>(),
                                                           new ArrayList<>(),
                                                           new ArrayList<>(),
                                                           new ArrayList<>()));
            Video video3 = videoService.addVideo(new Video(null,
                                                           "Chuy???n T??u Gi??ng Sinh",
                                                           "Nh???c gi??ng sinh hay nh???t",
                                                           "2019",
                                                           "15",
                                                           "7",
                                                           "TV Kids VN",
                                                           "nh???c thi???u nhi M???m Ch???i L??!",
                                                           new ArrayList<>(),
                                                           new ArrayList<>(),
                                                           new ArrayList<>(),
                                                           new ArrayList<>()));

            videoService.addEp(new Ep(null,
                                      video.getId(),
                                      1,
                                      "K??? ngh??? h?? v???i m???y con ma",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://www.youtube.com/watch?v=xaDl80P6GoA"));
            videoService.addEp(new Ep(null,
                                      video.getId(),
                                      2,
                                      "H??y t???o ra c??nh c???a th???n k??? n??o!",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://www.youtube.com/watch?v=xaDl80P6GoA"));

            videoService.addEp(new Ep(null,
                                      video1.getId(),
                                      1,
                                      "?????u m??y con ng?????i",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://www.youtube.com/watch?v=xaDl80P6GoA"));
            videoService.addEp(new Ep(null,
                                      video1.getId(),
                                      2,
                                      "K??? ho???ch tr???n kh???i tr??i ?????t",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://www.youtube.com/watch?v=xaDl80P6GoA"));

            videoService.addEp(new Ep(null,
                                      video2.getId(),
                                      1,
                                      "Con c?? b?? b??",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://youtu.be/jO2vrSXVDo0"));
            videoService.addEp(new Ep(null,
                                      video2.getId(),
                                      2,
                                      "Con heo ?????t",
                                      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp",
                                      "https://youtu.be/QKoTb2g-WjE"));

            videoService.addEp(new Ep(null,
                                      video3.getId(),
                                      1,
                                      "Chuy???n T??u Gi??ng Sinh",
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
                    courseService.createClassSchedule(new ClassSchedule(null,
                                                                        1,
                                                                        8,
                                                                        "Th??? 7, CN - 15:00",
                                                                        8,
                                                                        700000L,
                                                                        "https://www.google.com.vn/"));

            ClassSchedule classSchedule1 = courseService.createClassSchedule(new ClassSchedule(null,
                                                                2,
                                                                8,
                                                                "Th??? 2, Th??? 3 - 15:00",
                                                                8,
                                                                700000L,
                                                                "https://vtvgo.vn/xem-truc-tuyen-kenh-vtv5-5.html"));

            ClassSchedule classSchedule2 = courseService.createClassSchedule(new ClassSchedule(null,
                    1,
                    6,
                    "Th??? 2, Th??? 6 - 7:00",
                    8,
                    700000L,
                    "https://vtvgo.vn/xem-truc-tuyen-kenh-vtv5-5.html"));

            Rating rating = courseService.createRating(new Rating(null,
                                                                  user.getUsername(),
                                                                  5,
                                                                  "Kh?? ???n v??? m???t n???i dung v?? c??ch h?????ng d???n. M??nh cho 4*, hy v???ng con s??? th??ch b??? m??n n??y"));
            Rating rating1 = courseService.createRating(new Rating(null,
                                                                   user1.getUsername(),
                                                                   4,
                                                                   "B?? H???ng Ph??c b??nh th?????ng h???c to??n t?? duy t???i Trung T??m TiTan, nay ko ???????c ??i h???c n???a, ph???i h???c online th?? ????ng k?? kh??a n??y, th???y h???c c??ng kh?? ok, gi?? c??ng r??? h??n h???c tr???c ti???p, n??n h???c"));
            Rating rating2 = courseService.createRating(new Rating(null,
                                                                   user.getUsername(),
                                                                   5,
                                                                   "Th???y d???y nhi???t t??nh, c?? nhi???u b??i hay ho. Con m??nh c??n ??em l??n tr?????ng ????? bi???u di???n cho c?? v?? c??? l???p xem n???a ?????y"));

            CourseCatalog courseCatalog =
                    courseService.createCourseCatalog(new CourseCatalog(null,
                                                                        "Ti???ng Anh",
                                                                        "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tieng_anh-286b40d22a4d-1656059551172-KyAPqdKG.png?v=0&maxW=160&format=webp",
                                                                        "a",
                                                                        new ArrayList<>()
                    ));
            CourseCatalog courseCatalog1 =
                    courseService.createCourseCatalog(new CourseCatalog(null,
                            "Ti???ng Nh???t",
                            "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tieng_trung-02132af3cf47-1657873295508-BkStgZ28.png?v=0&format=webp",
                            "a",
                            new ArrayList<>()
                    ));

            Course course =
                    courseService.createCourse(new Course(null,
                                                          "Ti???ng Anh Giao Ti???p M???m Non",
                                                          "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tt___ti_ng_nah_m_m_non-c93aaeaf6a90-1664965814874-piefd46p.png?v=0&maxW=480&format=webp",
                                                          87500L,
                                                          "Kho?? h???c Ti???ng Anh Giao Ti???p cho tr??? m???m non t??? 4 ?????n 6 tu???i ??ang l??m quen Ti???ng Anh v?? ph??? huynh mong mu???n con ???????c r??n luy???n ph??t ??m theo chu???n, giao ti???p ph???n x???",
                                                          "4 - 5",
                                                          "45",
                                                          "B???t ?????u s???m khi ????? h???c vi??n",
                                                          10,
                                                          "Ti???ng Anh, Ti???ng Vi???t",
                                                          2,
                                                          "V???i kinh nghi???m d???y Ti???ng Anh giao ti???p cho c??c l???a tu???i v?? c??c c???p ?????",
                                                          "K???t th??c kh??a h???c Ti???ng Anh Giao Ti???p cho tr??? m???m non, b?? s???",
                                                          "N???i dung h???c t???p v?? luy???n t???p c??c k??? n??ng giao ti???ng Anh theo c??c gi??o tr??nh Qu???c t??? ti??u chu???n, ph?? h???p l???a tu???i: First Friend",
                                                          "S??ch PDF cho b??",
                                                          "Qu?? Ph??? huynh b??? tr?? ch??? ng???i h???c tho??ng, y??n t??nh v?? ????? ??nh s??ng cho tr???.",
                                                          new ArrayList<>(),
                                                          new ArrayList<>(),
                                                          new ArrayList<>()));

            Course course1 =
                    courseService.createCourse(new Course(null,
                            "Ti???ng Nh???t Giao Ti???p N5",
                            "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tt___ti_ng_nah_m_m_non-c93aaeaf6a90-1664965814874-piefd46p.png?v=0&maxW=480&format=webp",
                            87500L,
                            "Kho?? h???c Ti???ng Anh Giao Ti???p cho tr??? m???m non t??? 4 ?????n 6 tu???i ??ang l??m quen Ti???ng Anh v?? ph??? huynh mong mu???n con ???????c r??n luy???n ph??t ??m theo chu???n, giao ti???p ph???n x???",
                            "4 - 5",
                            "45",
                            "B???t ?????u s???m khi ????? h???c vi??n",
                            10,
                            "Ti???ng Anh, Ti???ng Vi???t",
                            2,
                            "V???i kinh nghi???m d???y Ti???ng Anh giao ti???p cho c??c l???a tu???i v?? c??c c???p ?????",
                            "K???t th??c kh??a h???c Ti???ng Anh Giao Ti???p cho tr??? m???m non, b?? s???",
                            "N???i dung h???c t???p v?? luy???n t???p c??c k??? n??ng giao ti???ng Anh theo c??c gi??o tr??nh Qu???c t??? ti??u chu???n, ph?? h???p l???a tu???i: First Friend",
                            "S??ch PDF cho b??",
                            "Qu?? Ph??? huynh b??? tr?? ch??? ng???i h???c tho??ng, y??n t??nh v?? ????? ??nh s??ng cho tr???.",
                            new ArrayList<>(),
                            new ArrayList<>(),
                            new ArrayList<>()));

            courseService.addCourseToCourseCatalog(courseCatalog.getId(), course.getId());
            courseService.addClassSchedulesToCourse(course.getId(), classSchedule.getId());
            courseService.addClassSchedulesToCourse(course.getId(), classSchedule1.getId());
            courseService.addRatingsToCourse(course.getId(), rating.getId());
            courseService.addRatingsToCourse(course.getId(), rating1.getId());
            courseService.addRatingsToCourse(course.getId(), rating2.getId());
            courseService.addUsersToCourse(course.getId(), user1.getUsername());

            courseService.addCourseToCourseCatalog(courseCatalog1.getId(), course1.getId());
            courseService.addClassSchedulesToCourse(course1.getId(), classSchedule2.getId());
            courseService.addUsersToCourse(course1.getId(), user1.getUsername());


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
