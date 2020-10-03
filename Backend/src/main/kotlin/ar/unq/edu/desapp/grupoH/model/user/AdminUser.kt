package ar.unq.edu.desapp.grupoH.model.user

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class AdminUser(username: String, password: String, email: String):
        User(username,password,email){

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null
}

