package tv.dzerok1.popskids.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tv.dzerok1.popskids.dao.AccountsRepository;
import tv.dzerok1.popskids.entity.Accounts;
import tv.dzerok1.popskids.modal.AccountDTO;
import tv.dzerok1.popskids.security.Roles;
import tv.dzerok1.popskids.service.AccountService;

import javax.annotation.security.RolesAllowed;

import static tv.dzerok1.popskids.security.Roles.ADMIN;
import static tv.dzerok1.popskids.security.Roles.USER;

@RestController
public class AccountsController {
    @Autowired
    private AccountsRepository accountsRepository;

    @Autowired
    AccountService accountService;

    @GetMapping("api/accounts")
    public Iterable<Accounts> getAccounts() {
        return accountsRepository.findAll();
    }

    @PostMapping("api/account")
    public AccountDTO addAccount(@RequestBody AccountDTO accountDTO) {
        accountService.addAccount(accountDTO);
        return accountDTO;
    }
}
