package ar.unq.edu.desapp.grupoH.repository

import ar.unq.edu.desapp.grupoH.model.user.User
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository  : CrudRepository<User, Int>
