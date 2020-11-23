package ar.unq.edu.desapp.grupoH.service

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.states.ProjectState
import ar.unq.edu.desapp.grupoH.repository.CrowdFundingProjectRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDate

@Generated
@Service
class CrowdFundingProjectService {

    @Autowired
    private lateinit var repository: CrowdFundingProjectRepository

    @Autowired
    private lateinit var mailService: MailService

    fun findAll() = repository.findAll().toList()
    fun findOpen() = repository.findByProjectState(ProjectState.Opened)
    fun findById(id: Int) = repository.findById(id).get()
    fun findAboutToEnd() = repository.findAllByEstimatedFinishDateBetweenOrderByEstimatedFinishDateAsc(LocalDate.now(), LocalDate.now().plusDays(30))

    fun closeProject (id: Int){
        var projectToUpdate: CrowdfundingProject = repository.findById(id).get()
        projectToUpdate.changeToFinished()
        repository.save(projectToUpdate)
        mailService.sendClosedProjectMail(projectToUpdate.getDonorsEmails(), projectToUpdate.name!!)
    }
}
