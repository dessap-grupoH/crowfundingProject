package ar.unq.edu.desapp.grupoH.model.user

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import javax.persistence.*

@Entity
@DiscriminatorValue(value = "AdminUser")
class AdminUser : User {

    @Transient
    var adminPermission = true

    constructor()

    constructor(username: String, password: String, email: String) : super(username, password, email)

    override fun toString(): String {
        return "AdminUser((username='$username', password, email='$email')"
    }
}

