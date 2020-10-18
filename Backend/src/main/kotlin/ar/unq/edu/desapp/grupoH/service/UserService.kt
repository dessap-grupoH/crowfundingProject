package ar.unq.edu.desapp.grupoH.service

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Generated
@Service
class UserService {
    @Autowired
    private lateinit var repository: UserRepository

    fun findById(id: Int) = repository.findById(id).get()
}

