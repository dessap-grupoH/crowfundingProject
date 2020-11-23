package ar.unq.edu.desapp.grupoH.controller

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.aspects.LogWS
import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.DonationRequest
import ar.unq.edu.desapp.grupoH.service.DonationService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@Generated
@RestController
@CrossOrigin
@RequestMapping("/api/donation")
class DonationController {

    @Autowired
    private lateinit var service: DonationService

    @LogWS
    @PostMapping
    @Throws(Exception::class)
    fun donate(@RequestBody donationRequest: DonationRequest): ResponseEntity<CrowdfundingProject> {
        var response: CrowdfundingProject
        try {
            response = service.makeDonation(donationRequest)
        } catch (e: NoSuchElementException) {
            return ResponseEntity(HttpStatus.NOT_FOUND)
        } catch (e: Exception) {
            return ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return ResponseEntity(response, HttpStatus.OK)
    }
}
