package ar.unq.edu.desapp.grupoH.service

import ar.unq.edu.desapp.grupoH.Generated
import ar.unq.edu.desapp.grupoH.repository.TownRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Generated
@Service
class TownService {

    @Autowired
    private lateinit var repository: TownRepository

   fun findAll() = repository.findAll().toList()
   fun findTownsWithoutProject() = repository.findTownsWithoutProject()

}