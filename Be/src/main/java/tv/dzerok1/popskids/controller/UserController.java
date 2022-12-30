package tv.dzerok1.popskids.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tv.dzerok1.popskids.dao.RoleRepository;
import tv.dzerok1.popskids.dao.UserRepository;
import tv.dzerok1.popskids.domain.Role;
import tv.dzerok1.popskids.domain.User;
import tv.dzerok1.popskids.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity
                .ok()
                .body(userService.getUsers());
    }

    @PostMapping("/auth/register")
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        URI uri = URI.create(ServletUriComponentsBuilder
                                     .fromCurrentContextPath()
                                     .path("/api/user/save")
                                     .toUriString());
        User userTmp = userService.saveUser(user);
        if (userTmp == null) {
            return new ResponseEntity<>("Username already exists", HttpStatus.BAD_REQUEST);
        }
        userService.addRoleToUser(userTmp.getUsername(), "ROLE_USER");
        return ResponseEntity
                .created(uri)
                .body(userTmp);
    }

    @PostMapping("/role/save")
    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
        URI uri = URI.create(ServletUriComponentsBuilder
                                     .fromCurrentContextPath()
                                     .path("/api/role/save")
                                     .toUriString());
        return ResponseEntity
                .created(uri)
                .body(userService.saveRole(role));
    }

    @PostMapping("/role/addtouser")
    public ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form) {
        userService.addRoleToUser(form.getUsername(), form.getRoleName());
        return ResponseEntity
                .ok()
                .build();
    }

    @PostMapping("/course/addtouser/{classScheduleId}/{username}")
    public ResponseEntity<?> addCourseToUser(@PathVariable String username, @PathVariable Long classScheduleId) {
        userService.addClassScheduleToUser(username, classScheduleId);
        return ResponseEntity
                .ok()
                .build();
    }

    @GetMapping("/user/course/{username}")
    public ResponseEntity<?> getUserCourses(@PathVariable String username) {
        return ResponseEntity
                .ok()
                .body(userService.getUserCourses(username));
    }

    @GetMapping("/token/refresh")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            try {
                String refresh_token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("dzerok".getBytes());
                JWTVerifier verifier = JWT
                        .require(algorithm)
                        .build();
                DecodedJWT decodedJWT = verifier.verify(refresh_token);
                String username = decodedJWT.getSubject();
                User user = userService.getUser(username);
                String access_token = JWT
                        .create()
                        .withSubject(user.getUsername())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
                        .withIssuer(request
                                            .getRequestURL()
                                            .toString())
                        .withClaim("roles",
                                   user
                                           .getRoles()
                                           .stream()
                                           .map(Role::getName)
                                           .collect(Collectors.toList()))
                        .sign(algorithm);

                Map<String, String> tokens = new HashMap<>();
                tokens.put("access_token", access_token);
                tokens.put("refresh_token", refresh_token);
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);
            } catch (Exception e) {
                response.setHeader("error", e.getMessage());
                response.setStatus(FORBIDDEN.value());
//                    response.sendError(FORBIDDEN.value());

                Map<String, String> error = new HashMap<>();
                error.put("error_message", e.getMessage());
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        } else {
            throw new RuntimeException("Refresh token is missing");
        }
    }
}

@Data
class RoleToUserForm {
    private String username;
    private String roleName;
}
