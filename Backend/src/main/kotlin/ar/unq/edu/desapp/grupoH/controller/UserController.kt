package ar.unq.edu.desapp.grupoH.controller

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.model.user.User
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
}