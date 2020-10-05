package ar.unq.edu.desapp.grupoH.services

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject

interface ProjectRepository: GenericRepository<CrowdfundingProject,Int> {

    fun findByName(name: String)

}