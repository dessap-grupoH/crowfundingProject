package ar.unq.edu.desapp.grupoH.model.user

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
abstract class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = null

    lateinit var username: String

    lateinit var password: String

    lateinit var email: String

    constructor()

    constructor(username : String, password: String, email: String) {
        this.username = username
        this.password = password
        this.email = email
    }
}

