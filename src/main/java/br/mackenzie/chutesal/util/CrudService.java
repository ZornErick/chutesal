package br.mackenzie.chutesal.util;

import java.util.List;

public interface CrudService<T> {

    List<T> findAll();

    T findById(Long id);

    T create(T entity);

    T update(Long id, T entity);

    void delete(Long id);
}
