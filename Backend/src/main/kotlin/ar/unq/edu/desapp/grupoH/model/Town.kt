package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.states.ConnectionState
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Town {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null

    lateinit var name: String

    lateinit var province: String

    var population: Int = 0

    var connectionState: ConnectionState = ConnectionState.Disconnected

    constructor()

    constructor(name: String, province: String, population: Int) {
        this.name = name
        this.province = province
        this.population = population
    }

    fun setConnectedState() {
        this.connectionState = ConnectionState.Connected
    }

    fun changeStateToConnecting(){
        this.connectionState = ConnectionState.Connecting
    }

}