package ar.unq.edu.desapp.grupoH.service

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.model.states.ProjectState
import ar.unq.edu.desapp.grupoH.repository.CrowdFundingProjectRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Generated
@Service
class CrowdFundingProjectService {

    @Autowired
    private lateinit var repository: CrowdFundingProjectRepository

    fun findAll() = repository.findAll().toList()
    fun findOpen() = repository.findByProjectState(ProjectState.Opened)
    fun findById(id: Int) = repository.findById(id).get()
}
