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

			videoService.addCategory(new Category(null, "Cartoons"));
			videoService.addCategory(new Category(null, "Children's Music"));

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
//			Video video = videoService.addVideo(new Video(null, "Doraemon S10", "Chú mèo máy đến từ tương lai, Doremon, Đôrêmon", "2013", "25", "7", "TV Asahi VN", "a", new ArrayList<>(), new ArrayList<>(), new ArrayList<>()));

			videoService.addEp(new Ep( null, video.getId(), 1, "Kỳ nghỉ hè với mấy con ma", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp", "https://www.youtube.com/watch?v=xaDl80P6GoA"));
			videoService.addEp(new Ep( null, video.getId(), 2, "Hãy tạo ra cánh cửa thần kỳ nào!", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp", "https://www.youtube.com/watch?v=xaDl80P6GoA"));

			videoService.addEp(new Ep( null, video1.getId(), 1, "Đầu máy con người", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp", "https://www.youtube.com/watch?v=xaDl80P6GoA"));
			videoService.addEp(new Ep( null, video1.getId(), 2, "Kế hoạch trốn khỏi trái đất", "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemon_s10_tap_469_ky_nghi_he_voi_may_con_ma_horizontal-595039e3e6d3-1667208683486-0UbW1FjN.jpg?v=0&maxW=320&format=webp", "https://www.youtube.com/watch?v=xaDl80P6GoA"));

			videoService.addCategoryToVideo(video.getId(), "Cartoons");
			videoService.addCountryToVideo(video.getId(), "Japan");
			videoService.addTypeToVideo(video.getId(), "Cartoon");

			videoService.addCategoryToVideo(video1.getId(), "Cartoons");
			videoService.addCountryToVideo(video1.getId(), "Vietnam");
			videoService.addTypeToVideo(video1.getId(), "Movie");
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
