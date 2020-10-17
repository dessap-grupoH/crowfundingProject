package ar.unq.edu.desapp.grupoH.modelTesting

import ar.unq.edu.desapp.grupoH.model.Town
import ar.unq.edu.desapp.grupoH.model.states.ConnectionState
import org.junit.Assert
import org.junit.jupiter.api.Test

class TownTest{

    @Test
    fun connectionStatesTest(){
        var town = Town("Pergamino","Buenos Aires", 6000)

        Assert.assertEquals(ConnectionState.Disconnected, town.connectionState)
        town.changeStateToConnecting()

        Assert.assertEquals(ConnectionState.Connecting, town.connectionState)
        town.setConnectedState()

        Assert.assertEquals(ConnectionState.Connected, town.connectionState)
    }

}