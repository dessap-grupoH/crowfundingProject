package ar.unq.edu.desapp.grupoH.model.user

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class AdminUser : User {

    constructor()

    constructor(username: String, password: String, email: String) : super(username, password, email)

}

