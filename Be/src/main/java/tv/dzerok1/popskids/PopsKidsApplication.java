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
import tv.dzerok1.popskids.service.UserService;

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
	CommandLineRunner run(UserService userService){
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
