package ar.unq.edu.desapp.grupoH.modelTesting

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.Donation
import ar.unq.edu.desapp.grupoH.model.Town
import ar.unq.edu.desapp.grupoH.model.User
import ar.unq.edu.desapp.grupoH.model.errors.PercentageToCompleteProjectOutOfRange
import ar.unq.edu.desapp.grupoH.model.errors.PricePerHabitantOutOfRange
import ar.unq.edu.desapp.grupoH.model.states.ProjectState
import org.junit.Assert
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.fail
import org.mockito.Mockito
import org.mockito.Mockito.mock
import java.time.LocalDate

class CrowdfundingTest {

    private val townMock: Town = mock(Town::class.java)
    private val startDateMock: LocalDate = mock(LocalDate::class.java)
    private val finishDateMock: LocalDate = mock(LocalDate::class.java)
    private val donationMock: Donation = mock(Donation::class.java)
    private val userMock: User = mock(User::class.java)
    private var project1 = CrowdfundingProject("project1", townMock, startDateMock, finishDateMock )


    @BeforeEach
    fun settingMockedData(){
        Mockito.`when`(townMock.population).thenReturn(3500)
        Mockito.`when`(donationMock.from).thenReturn(userMock)
        Mockito.`when`(userMock.nick).thenReturn("Bill Gates")
        Mockito.`when`(donationMock.amount).thenReturn(350000)
    }

    @Test
    fun projectWithInvalidPricePerHabitantTest(){
        try{
            project1.changePricePerHabitant(200000)
            fail("was expected an error about price out of range")
        }catch (ex: PricePerHabitantOutOfRange){
            Assert.assertEquals("El monto por habitante excede el limite aceptado.", ex.exMessage)
        }
    }

    @Test
    fun projectWithInvalidPercentageToCompleteProjectTest(){
        try{
            project1.changePercentageNeeded(30)
            fail("was expected an error about percentage out of range")
        }catch (ex: PercentageToCompleteProjectOutOfRange){
            Assert.assertEquals("El porcentaje requerido excede el limite aceptado.", ex.exMessage)
        }
    }

    @Test
    fun moneyRequiredToCompleteProjectTest(){
        Assert.assertEquals(3500000, project1.moneyRequiredToCompleteProject())
    }

    @Test
    fun receiveDonationTest(){
        project1.recieveDonation(donationMock)

        Assert.assertEquals("Bill Gates",project1.donorList.first())
        Assert.assertEquals(350000, project1.moneyCollected)
    }

    @Test
    fun actualPercentageCompletedTest(){
        project1.recieveDonation(donationMock)

        Assert.assertEquals(10,project1.actualPercentageCompleted())
    }

    @Test
    fun actualState(){
        Assert.assertEquals(ProjectState.Opened, project1.projectState)

    }


}