package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.states.ConnectionState
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Town(val name: String, val province: String, val population: Int) {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null

    var connectionState: ConnectionState = ConnectionState.Disconnected

    fun setConnectedState() {
        this.connectionState = ConnectionState.Connected
    }

    fun changeStateToConnecting(){
        this.connectionState = ConnectionState.Connecting
    }

}