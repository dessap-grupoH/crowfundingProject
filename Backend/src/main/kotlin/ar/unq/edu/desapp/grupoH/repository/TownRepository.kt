package ar.unq.edu.desapp.grupoH.repository

import ar.unq.edu.desapp.grupoH.model.Town
import ar.unq.edu.desapp.grupoH.model.states.ProjectState
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface TownRepository  : CrudRepository<Town, Int> {
    @Query("""select distinct t from Town t 
                                      left join Crowdfunding_Project cp on t.id = cp.placeToConnect.id 
                                                      where t.connectionState = 'Disconnected' and cp.projectState is null or cp.projectState <> 'Opened'""")
    fun findTownsWithoutProject() : List<Town>
}