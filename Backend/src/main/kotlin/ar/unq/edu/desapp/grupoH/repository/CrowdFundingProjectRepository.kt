package ar.unq.edu.desapp.grupoH.repository

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.states.ProjectState
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.time.LocalDate

@Repository
interface CrowdFundingProjectRepository  : CrudRepository<CrowdfundingProject, Int> {
    fun findByProjectState(state: ProjectState): List<CrowdfundingProject>

    fun findAllByEstimatedFinishDateBetweenOrderByEstimatedFinishDateAsc(startDate: LocalDate, endDate: LocalDate): List<CrowdfundingProject>

    fun findTop10ByProjectStateOrderByMoneyCollected(state: ProjectState) : List<CrowdfundingProject>

    fun findTop10ByProjectStateOrderByLastDonationDateAsc(state: ProjectState) : List<CrowdfundingProject>
}
