package ar.unq.edu.desapp.grupoH.service

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.model.Auth0LoginRequest
import ar.unq.edu.desapp.grupoH.model.errors.InvalidData
import ar.unq.edu.desapp.grupoH.model.errors.InvalidSignIn
import ar.unq.edu.desapp.grupoH.model.errors.UserAlreadyExists
import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import ar.unq.edu.desapp.grupoH.model.user.User
import ar.unq.edu.desapp.grupoH.repository.UserRepository
import ar.unq.edu.desapp.grupoH.security.getJWTToken
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Generated
@Service
class UserService {
    @Autowired
    private lateinit var repository: UserRepository

    @Throws(InvalidSignIn::class)
    fun loginUser(user: User) : User {
        val usr: User? = repository.findByEmail(user.email) ?: throw InvalidSignIn("Usuario incorrecto")
        usr!!.token = getJWTToken(usr.username, 86400000)
        usr.password = null
        return usr
    }

    @Throws(InvalidSignIn::class)
    fun loginAuth0(auth0Req: Auth0LoginRequest) : User {
        //if (!auth0ValidToken) throw InvalidSignIn("Token inválido")
        var usr: User? = repository.findByEmail(auth0Req.email)
        if (usr == null) usr = repository.save(DonorUser(auth0Req.username, auth0Req.token, auth0Req.email, auth0Req.nick))
        usr.token = getJWTToken(usr.username, 86400000)
        usr.password = null
        return usr
    }

    @Throws(InvalidData::class, UserAlreadyExists::class)
    fun registerUser(registerRequest: DonorUser) : DonorUser {
        if (registerRequest.password == null ||  registerRequest.password == "") throw InvalidData("Los datos no son válidos.")
        repository.save(registerRequest)
        registerRequest.token = getJWTToken(registerRequest.username, 86400000)
        registerRequest.password = null
        return registerRequest
    }

    fun findById(id: Int) = repository.findById(id).get()
}

