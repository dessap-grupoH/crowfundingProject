package ar.unq.edu.desapp.grupoH.services

import org.springframework.data.repository.NoRepositoryBean
import org.springframework.data.repository.Repository
import java.io.Serializable


@NoRepositoryBean
interface GenericRepository<T, ID : Serializable?> : Repository<T, ID> {
    fun findOne(id: ID): T
    fun save(entity: T): T
}

