package ar.unq.edu.desapp.grupoH.controller

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.aspects.LogWS
import ar.unq.edu.desapp.grupoH.model.errors.InvalidData
import ar.unq.edu.desapp.grupoH.model.errors.InvalidSignIn
import ar.unq.edu.desapp.grupoH.model.errors.UserAlreadyExists
import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import ar.unq.edu.desapp.grupoH.model.user.User
import ar.unq.edu.desapp.grupoH.service.MailService
import ar.unq.edu.desapp.grupoH.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@Generated
@RestController
@CrossOrigin
@RequestMapping("/api/user")
class UserController {

    @Autowired
    private lateinit var service: UserService

    @Autowired
    private lateinit var mailservice: MailService


    @LogWS
    @PostMapping("/login")
    @Throws(Exception::class)
    fun loginUser(@RequestBody user: User): ResponseEntity<User> {
        var response: User
        try {
            response = service.loginUser(user)
        } catch (e: InvalidSignIn) {
            return ResponseEntity(HttpStatus.UNAUTHORIZED)
        }
        return ResponseEntity(response, HttpStatus.OK)
    }

    @LogWS
    @PostMapping("/register")
    @Throws(Exception::class)
    fun registerUser(@RequestBody registerRequest: DonorUser): ResponseEntity<*> {
        var response: DonorUser
        try {
            response = service.registerUser(registerRequest)
        } catch (e: InvalidData) {
            return ResponseEntity("Los datos no son válidos.", HttpStatus.BAD_REQUEST)
        } catch (e: UserAlreadyExists) {
            return ResponseEntity("El usuario ya existe", HttpStatus.PRECONDITION_FAILED)
        }
        return ResponseEntity(response, HttpStatus.OK)
    }

    @LogWS
    @GetMapping
    @Throws(Exception::class)
    fun findDetailsOf(@RequestParam id: Int): ResponseEntity<User> {
        var response: User
        try {
            response = service.findById(id)
        } catch (e: NoSuchElementException) {
            return ResponseEntity(HttpStatus.NOT_FOUND)
        } catch (e: Exception) {
            return ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return ResponseEntity(response, HttpStatus.OK)
    }

    @LogWS
    @GetMapping("/testMail")
    @Throws(Exception::class)
    fun testMail(): ResponseEntity<String> {
        try {
            mailservice.sendDailyEmail()
           // mailservice.sendClosedProjectMail(listOf("crowdfunding.unq.grupoH@gmail.com"), "test")
        } catch (e: NoSuchElementException) {
            return ResponseEntity(HttpStatus.NOT_FOUND)
        } catch (e: Exception) {
            return ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return ResponseEntity("", HttpStatus.OK)
    }
}