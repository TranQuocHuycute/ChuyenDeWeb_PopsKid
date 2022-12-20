package tv.dzerok1.popskids.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tv.dzerok1.popskids.dao.AccountsRepository;
import tv.dzerok1.popskids.entity.Accounts;
import tv.dzerok1.popskids.modal.AccountDTO;

public interface AccountService {
    void addAccount(AccountDTO accountDTO);
}

@Transactional
@Service
class AccountServiceImpl implements AccountService {
    @Autowired
    AccountsRepository accountsRepository;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void addAccount(AccountDTO accountDTO) {
        Accounts accounts = modelMapper.map(accountDTO, Accounts.class);
        accounts.setPassword(new BCryptPasswordEncoder().encode(accountDTO.getPassword()));
        accountsRepository.save(accounts);
        accountDTO.setId(accounts.getId());
    }
}