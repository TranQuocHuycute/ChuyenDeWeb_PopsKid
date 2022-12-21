package tv.dzerok1.popskids.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import tv.dzerok1.popskids.message.Message;

@RestController
public class ExampleController {

    @GetMapping("/user")
    public Message userEndpoint() {
        return new Message("Hello user!");
    }

    @GetMapping("/admin")
    public Message adminEndpoint() {
        return new Message("Hello admin!");
    }

}
