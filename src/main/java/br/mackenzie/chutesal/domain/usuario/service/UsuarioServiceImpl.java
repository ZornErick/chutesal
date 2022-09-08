package br.mackenzie.chutesal.domain.usuario.service;

import br.mackenzie.chutesal.domain.usuario.Usuario;
import br.mackenzie.chutesal.domain.usuario.UsuarioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepo usuarioRepo;

    @Autowired
    public UsuarioServiceImpl(UsuarioRepo usuarioRepo) {
        this.usuarioRepo = usuarioRepo;
    }

    @Override
    public List<Usuario> findAll() {
        return null;
    }

    @Override
    public Usuario findById(Long id) {
        return null;
    }

    @Override
    public Usuario findByUsername(String username) {
        Optional<Usuario> usuario = usuarioRepo.findByUsername(username);
        if(usuario.isEmpty()) {
            return null;
        }
        return usuario.get();
    }

    @Override
    public Usuario create(Usuario entity) {
        return usuarioRepo.save(entity);
    }

    @Override
    public Usuario update(Long id, Usuario entity) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> usuario = usuarioRepo.findByUsername(username);
        if(usuario.isPresent()) {
            return usuario.get();
        }
        throw new UsernameNotFoundException("Usuário ou senha inválidos!");
    }
}
