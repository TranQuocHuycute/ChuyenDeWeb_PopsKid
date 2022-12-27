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
	CommandLineRunner run(UserService userService, VideoService videoService) {
		return args -> {
			userService.saveRole(new Role(null, "ROLE_USER"));
			userService.saveRole(new Role(null, "ROLE_TEACHER"));
			userService.saveRole(new Role(null, "ROLE_MANAGER"));
			userService.saveRole(new Role(null, "ROLE_ADMIN"));
			userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));

			userService.saveUser(new User(null, "John Travolta", "john", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Will Smith", "will", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Jim Carry", "jim", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Arnold Schwarzenegger", "arnold", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Tom Cruise", "tom", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Bruce Willis", "bruce", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Admin", "admin", "admin", new ArrayList<>()));

			userService.addRoleToUser("john", "ROLE_USER");
			userService.addRoleToUser("will", "ROLE_USER");
			userService.addRoleToUser("will", "ROLE_TEACHER");
			userService.addRoleToUser("jim", "ROLE_MANAGER");
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

			videoService.addCategory(new Category(null, "Entertaiment"));
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


			Video video = videoService.addVideo(new Video(null, "Doraemon S10 Số một", "Chú mèo máy đến từ tương lai, Doremon, Đôrêmon", "2013", "25", "7", "TV Asahi VN", "a", new ArrayList<>(), new ArrayList<>(), new ArrayList<>(), new ArrayList<>()));
			Video video1 = videoService.addVideo(new Video(null, "Doraemon S10 Số Hai", "Chú mèo máy đến từ tương lai, Doremon, Đôrêmon", "2013", "25", "7", "TV Asahi VN", "a", new ArrayList<>(), new ArrayList<>(), new ArrayList<>(), new ArrayList<>()));


			Video video2 = videoService.addVideo(new Video(null, "Con cò bé bé", "Nhạc cho bé ", "2015", "23", "7", "Music Kid", "  cho khán giả những hình ảnh hoạt họa rất đẹp" +
					"\n" +
					"Nếu bạn đang muốn tìm xem ca khúc Con cò bé bé Mầm Chồi Lá thì có thể truy cập POPS Kids để theo dõi bất cứ lúc nào", new ArrayList<>(), new ArrayList<>(), new ArrayList<>(), new ArrayList<>()));
			Video video3 = videoService.addVideo(new Video(null, "Chuyến Tàu Giáng Sinh", "Nhạc giáng sinh hay nhất", "2019", "15", "7", "TV Kids VN", "nhạc thiếu nhi Mầm Chồi Lá!", new ArrayList<>(), new ArrayList<>(), new ArrayList<>(), new ArrayList<>()));

			videoService.addEp(new Ep( null, video.getId(), 1, "Kỳ nghỉ hè với mấy con ma", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp", "https://www.youtube.com/watch?v=xaDl80P6GoA"));
			videoService.addEp(new Ep( null, video.getId(), 2, "Hãy tạo ra cánh cửa thần kỳ nào!", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp", "https://www.youtube.com/watch?v=xaDl80P6GoA"));

			videoService.addEp(new Ep( null, video1.getId(), 1, "Đầu máy con người", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp", "https://www.youtube.com/watch?v=xaDl80P6GoA"));
			videoService.addEp(new Ep( null, video1.getId(), 2, "Kế hoạch trốn khỏi trái đất", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp", "https://www.youtube.com/watch?v=xaDl80P6GoA"));

			videoService.addEp(new Ep( null, video2.getId(), 1, "Con cò bé bé", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp", "https://youtu.be/jO2vrSXVDo0"));
			videoService.addEp(new Ep( null, video2.getId(), 2, "Con heo đất", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp", "https://youtu.be/QKoTb2g-WjE"));

			videoService.addEp(new Ep( null, video3.getId(), 1, "Chuyến Tàu Giáng Sinh", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/new_cocomelon_mothers_day_breakfast_horizontal-c0e7d0d527ca-1644289838610-JAyxtwIJ.jpg?v=0&maxW=320&format=webp", "youtube.com/watch?v=HcvB7dXApc0"));
			videoService.addEp(new Ep( null, video3.getId(), 2, "Jingle Bells", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/mam_choi_la_2022_hoat_hinh_tap_8_horizontal-14a66d836cd6-1670817132264-xrflgbJh.jpg?v=0&maxW=320&format=webp", "https://www.youtube.com/watch?v=LnEtlC4QzQM"));


			videoService.addCategoryToVideo(video.getId(), "Entertaiment");
			videoService.addCountryToVideo(video.getId(), "Japan");
			videoService.addTypeToVideo(video.getId(), "Cartoon");

			videoService.addCategoryToVideo(video1.getId(), "Entertaiment");
			videoService.addCountryToVideo(video1.getId(), "Vietnam");
			videoService.addTypeToVideo(video1.getId(), "Movie");

			videoService.addCategoryToVideo(video2.getId(), "Music");
			videoService.addCountryToVideo(video2.getId(), "Vietnam");
			videoService.addTypeToVideo(video2.getId(), "Music");

			videoService.addCategoryToVideo(video3.getId(), "Music");
			videoService.addCountryToVideo(video3.getId(), "UK");
//			videoService.addTypeToVideo(video3.getId(), "Cartoon");

		};
	}

	@Bean
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setFieldMatchingEnabled(true)
				.setFieldAccessLevel(Configuration.AccessLevel.PRIVATE)
				.setMatchingStrategy(MatchingStrategies.STRICT);
		return modelMapper;
	}
}
