package br.mackenzie.chutesal.domain.role.service;

import br.mackenzie.chutesal.domain.role.Role;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {

    @Override
    public List<Role> findAll() {
        return null;
    }

    @Override
    public Role findById(Long id) {
        return null;
    }

    @Override
    public Role create(Role entity) {
        return null;
    }

    @Override
    public Role update(Long id, Role entity) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
