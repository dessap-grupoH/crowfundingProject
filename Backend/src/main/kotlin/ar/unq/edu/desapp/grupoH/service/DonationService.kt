package ar.unq.edu.desapp.grupoH.service

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.DonationRequest
import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import ar.unq.edu.desapp.grupoH.repository.CrowdFundingProjectRepository
import ar.unq.edu.desapp.grupoH.repository.DonationRepository
import ar.unq.edu.desapp.grupoH.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Generated
@Service
class DonationService {

    @Autowired
    private lateinit var donationRepository: DonationRepository

    @Autowired
    private lateinit var userRepository: UserRepository

    @Autowired
    private lateinit var projectRepository: CrowdFundingProjectRepository

    @Transactional
    fun makeDonation(donationRequest: DonationRequest): CrowdfundingProject {
        val user = userRepository.findById(donationRequest.donatorId).get() as DonorUser
        val project = projectRepository.findById(donationRequest.projectId).get()
        user.makeDonation(donationRequest.paymentMethod, donationRequest.amount, project, donationRequest.comment)
        userRepository.save(user)
        projectRepository.save(project)
        return project
    }

}
