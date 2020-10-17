package ar.unq.edu.desapp.grupoH.controller

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.model.Town
import ar.unq.edu.desapp.grupoH.service.TownService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@Generated
@RestController
@CrossOrigin
@RequestMapping("/api/towns")
class TownRestController {

    @Autowired
    private lateinit var service: TownService

    @GetMapping
    @Throws(Exception::class)
    fun findAll(): ResponseEntity<List<Town>> {
        var response: List<Town>
        try {
            response = service.findAll()
        } catch (e: Exception) {
            return ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return ResponseEntity(response, HttpStatus.OK)
    }

}