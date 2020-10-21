package ar.unq.edu.desapp.grupoH.model.user

import javax.persistence.*

@Entity
@DiscriminatorValue(value = "AdminUser")
class AdminUser : User {

    constructor()

    constructor(username: String, password: String, email: String) : super(username, password, email)

}

