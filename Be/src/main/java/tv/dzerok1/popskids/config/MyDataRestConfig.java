package tv.dzerok1.popskids.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import tv.dzerok1.popskids.entity.Post;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] theUnsupportedActions = {
                HttpMethod.DELETE,
                HttpMethod.PATCH,
                HttpMethod.POST,
                HttpMethod.PUT
        }; // disable HTTP methods for Book: DELETE, POST, PUT, PATCH

        config.exposeIdsFor(Post.class);

        disableHttpMethods(Post.class, config, theUnsupportedActions);

//        Configure CORS mapping
        String theAllowedorigins = "http://localhost:3000";
        cors.addMapping(config.getBasePath() + "/**")
            .allowedOrigins(theAllowedorigins);
    }

    private void disableHttpMethods(
            Class theClass,
            RepositoryRestConfiguration config,
            HttpMethod[] theUnsupportedActions
    ) {
        config.getExposureConfiguration()
              .forDomainType(theClass)
              .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
              .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
    }
}
