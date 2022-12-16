package tv.dzerok1.popskids.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import tv.dzerok1.popskids.dao.AccountsRepository;
import tv.dzerok1.popskids.entity.Accounts;

@RestController
public class AccountsController {
    @Autowired
    private AccountsRepository accountsRepository;

    @GetMapping("api/accounts")
    public Iterable<Accounts> getAccounts() {
        return accountsRepository.findAll();
    }
}
