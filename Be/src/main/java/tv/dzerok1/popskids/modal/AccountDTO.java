package tv.dzerok1.popskids.modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import tv.dzerok1.popskids.security.Roles;

@Data
@AllArgsConstructor
public class AccountDTO {
    private Long id;
    private String username;
    private String full_name;
    private String password;
    private Roles role;
}
