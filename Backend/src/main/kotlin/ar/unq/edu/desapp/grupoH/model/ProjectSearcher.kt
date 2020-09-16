package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.errors.ModelMessages
import ar.unq.edu.desapp.grupoH.model.errors.ProjectNotFound

object ProjectSearcher{

    private var existentProjects: MutableList<CrowdfundingProject> = emptyList<CrowdfundingProject>().toMutableList()

    fun addProject(project: CrowdfundingProject){
        this.existentProjects.add(project)
    }

    fun findProject(placeToSearch: Town): CrowdfundingProject{
        try {
            return this.existentProject(placeToSearch)
        }catch (ex: Exception){
            throw ProjectNotFound(ModelMessages.projectNotFound)
        }
    }

    private fun existentProject(placeToSearch: Town): CrowdfundingProject{
       return this.existentProjects.find { it.placeToConnect!!.name == placeToSearch.name } !!
    }
}