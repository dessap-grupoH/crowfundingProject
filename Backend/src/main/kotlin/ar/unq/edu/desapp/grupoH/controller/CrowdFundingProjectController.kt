package ar.unq.edu.desapp.grupoH.controller

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.service.CrowdFundingProjectService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@Generated
@RestController
@CrossOrigin
@RequestMapping("/api/projects")
class CrowdFundingProjectController {

    @Autowired
    private lateinit var service: CrowdFundingProjectService

    @GetMapping
    @Throws(Exception::class)
    fun findAll(): ResponseEntity<List<CrowdfundingProject>> {
        var response: List<CrowdfundingProject>
        try {
            response = service.findAll()
        } catch (e: Exception) {
            return ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return ResponseEntity(response, HttpStatus.OK)
    }

    @GetMapping("/open")
    @Throws(Exception::class)
    fun findAllOpen(): ResponseEntity<List<CrowdfundingProject>> {
        var response: List<CrowdfundingProject>
        try {
            response = service.findOpen()
        } catch (e: Exception) {
            return ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return ResponseEntity(response, HttpStatus.OK)
    }

    @GetMapping("/details")
    @Throws(Exception::class)
    fun findDetailsOf(@RequestParam id: Int): ResponseEntity<CrowdfundingProject> {
        var response: CrowdfundingProject
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
