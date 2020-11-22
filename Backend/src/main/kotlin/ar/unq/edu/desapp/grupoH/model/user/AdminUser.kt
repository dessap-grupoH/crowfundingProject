package ar.unq.edu.desapp.grupoH.model.user

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import javax.persistence.*

@Entity
@DiscriminatorValue(value = "AdminUser")
class AdminUser : User {

    var adminPermission = true

    constructor()

    constructor(username: String, password: String, email: String) : super(username, password, email)

}

