package ar.unq.edu.desapp.grupoH.repository

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.states.ProjectState
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface CrowdFundingProjectRepository  : CrudRepository<CrowdfundingProject, Int> {
    fun findByProjectState(state: ProjectState): List<CrowdfundingProject>

    @Query("select cfp from Crowdfunding_Project cfp where month(estimatedFinishDate) = :month")
    fun findAllByEstimatedFinishDateMonth(@Param("month") month: Int): List<CrowdfundingProject>
}
