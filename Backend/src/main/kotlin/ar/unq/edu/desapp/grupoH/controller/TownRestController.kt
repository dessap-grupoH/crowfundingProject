package ar.unq.edu.desapp.grupoH.controller

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.aspects.LogWS
import ar.unq.edu.desapp.grupoH.model.Town
import ar.unq.edu.desapp.grupoH.service.TownService
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.Instant
import java.time.LocalTime

@Generated
@RestController
@CrossOrigin
@RequestMapping("/api/towns")
class TownRestController {

    @Autowired
    private lateinit var service: TownService

    @LogWS
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

    @LogWS
    @GetMapping("/noProject")
    @Throws(Exception::class)
    fun findTownsWithoutProject(): ResponseEntity<List<Town>> {
        var response: List<Town>
        try {
            response = service.findTownsWithoutProject()
        } catch (e: Exception) {
            return ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return ResponseEntity(response, HttpStatus.OK)
    }
}