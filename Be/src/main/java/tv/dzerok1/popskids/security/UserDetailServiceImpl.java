package tv.dzerok1.popskids.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tv.dzerok1.popskids.dao.AccountsRepository;
import tv.dzerok1.popskids.entity.Accounts;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    @Autowired
    private AccountsRepository accountsRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Accounts accounts = accountsRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username: " + username + " not found"));
        return new UserDetailsImpl(accounts);
    }
}
