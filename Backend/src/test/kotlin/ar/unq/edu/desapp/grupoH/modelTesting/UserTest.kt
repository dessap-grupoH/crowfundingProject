package ar.unq.edu.desapp.grupoH.modelTesting

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.PaymentMethod
import ar.unq.edu.desapp.grupoH.model.Town
import ar.unq.edu.desapp.grupoH.model.User
import ar.unq.edu.desapp.grupoH.model.errors.InvalidAmountForDonation
import org.junit.Assert
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.fail
import org.mockito.Mockito.`when`
import org.mockito.Mockito.mock


class UserTest {

    private val user1 = User("user1","123456","user1@gmail.com", "1x")
    private val projectMock: CrowdfundingProject = mock(CrowdfundingProject::class.java)
    private val project2Mock: CrowdfundingProject = mock(CrowdfundingProject::class.java)
    private val townMock: Town = mock(Town::class.java)

    @BeforeEach
    fun settingMockedData(){
        `when`(projectMock.placeToConnect).thenReturn(townMock)
        `when`(projectMock.name).thenReturn("bigProject")
        `when`(project2Mock.name).thenReturn("littleProject")
        `when`(townMock.population).thenReturn(1500)
    }


    @Test
    fun makeDonnationTest(){
        user1
                .makeDonation(PaymentMethod.DebitCard,1500,projectMock,"Donacion de 1500$")

        Assert.assertEquals(4500, user1.totalPoints())
    }

    @Test
    fun makeDonnationWithInvalidAmount(){
        try{
        user1
                .makeDonation(PaymentMethod.DebitCard,-100,projectMock,"Donacion de -100$")
            fail("was expected an error about the invalid amount")
        }catch (ex: InvalidAmountForDonation){
            Assert.assertEquals("El monto que intenta donar es invalido.", ex.exMessage)
        }
    }

    @Test
    fun moreThanOneProjectParticipationTest(){
        Assert.assertEquals(false, user1.moreThanOneProjectParticipation())

        user1.makeDonation(PaymentMethod.DebitCard,1500,projectMock,"Donacion de 1500$")

        Assert.assertEquals(false, user1.moreThanOneProjectParticipation())

        user1.makeDonation(PaymentMethod.DebitCard,200,project2Mock,"Donacion de 200$")

        Assert.assertTrue(user1.moreThanOneProjectParticipation())
    }



}