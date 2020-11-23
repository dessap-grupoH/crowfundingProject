package ar.unq.edu.desapp.grupoH.model.user

import javax.persistence.*

@Entity(name = "User")
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING)
open class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    open var id: Int? = null

    open lateinit var username: String

    open var password: String? = null

    open lateinit var email: String

    @Transient
    var token : String? = null

    constructor()

    constructor(username : String, password: String, email: String) {
        this.username = username
        this.password = password
        this.email = email
    }

    override fun toString(): String {
        return "User(password, email='$email')"
    }

}

