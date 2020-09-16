package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.states.ConnectionState

class Town(val id: Int, val name: String, val province: String, val population: Int) {

    var connectionState: ConnectionState = ConnectionState.Disconnected

    fun setConnectedState() {
        this.connectionState = ConnectionState.Connected
    }

    fun changeStateToConnecting(){
        this.connectionState = ConnectionState.Connecting
    }

}