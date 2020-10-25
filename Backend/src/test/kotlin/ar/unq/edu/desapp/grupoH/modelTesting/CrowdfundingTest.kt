package ar.unq.edu.desapp.grupoH.modelTesting

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.Donation
import ar.unq.edu.desapp.grupoH.model.Town
import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import ar.unq.edu.desapp.grupoH.model.errors.PercentageToCompleteProjectOutOfRange
import ar.unq.edu.desapp.grupoH.model.errors.PricePerInhabitantOutOfRange
import ar.unq.edu.desapp.grupoH.model.states.ProjectState
import org.junit.Assert
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.fail
import org.mockito.Mockito
import org.mockito.Mockito.mock
import java.time.LocalDate

class CrowdfundingTest {

    @Test
    fun projectWithInvalidPricePerInhabitantTest(){
        try{
            val townMock: Town = mock(Town::class.java)
            val startDateMock: LocalDate = mock(LocalDate::class.java)
            val finishDateMock: LocalDate = mock(LocalDate::class.java)
            var project1 = CrowdfundingProject("Project1", townMock, startDateMock, finishDateMock )

            project1.changePricePerInhabitant(200000)

            fail("was expected an error about price out of range")
        }catch (ex: PricePerInhabitantOutOfRange){
            Assert.assertEquals("El monto por habitante excede el limite aceptado.", ex.exMessage)
        }
    }

    @Test
    fun projectWithInvalidPercentageToCompleteProjectTest(){
        try{
            val townMock: Town = mock(Town::class.java)
            val startDateMock: LocalDate = mock(LocalDate::class.java)
            val finishDateMock: LocalDate = mock(LocalDate::class.java)
            var project1 = CrowdfundingProject("Project1", townMock, startDateMock, finishDateMock )

            project1.changePercentageNeeded(30)

            fail("was expected an error about percentage out of range")
        }catch (ex: PercentageToCompleteProjectOutOfRange){
            Assert.assertEquals("El porcentaje requerido excede el limite aceptado.", ex.exMessage)
        }
    }

    @Test
    fun moneyRequiredToCompleteProjectTest(){
        val townMock: Town = mock(Town::class.java)
        val startDateMock: LocalDate = mock(LocalDate::class.java)
        val finishDateMock: LocalDate = mock(LocalDate::class.java)
        var project1 = CrowdfundingProject("Project1", townMock, startDateMock, finishDateMock )

        Mockito.`when`(townMock.population).thenReturn(3500)

        Assert.assertEquals(3500000, project1.getMoneyRequired())
    }

    @Test
    fun receiveDonationTest(){
        val townMock: Town = mock(Town::class.java)
        val donationMock: Donation = mock(Donation::class.java)
        val donorUserMock: DonorUser = mock(DonorUser::class.java)
        val startDateMock: LocalDate = mock(LocalDate::class.java)
        val finishDateMock: LocalDate = mock(LocalDate::class.java)
        var project1 = CrowdfundingProject("Project1", townMock, startDateMock, finishDateMock )

        Mockito.`when`(donationMock.from).thenReturn(donorUserMock)
        Mockito.`when`(donorUserMock.nick).thenReturn("Bill Gates")
        Mockito.`when`(donationMock.amount).thenReturn(350000)

        project1.receiveDonation(donationMock)

        Assert.assertEquals("Bill Gates",project1.getDonors().first().nick)
        Assert.assertEquals(350000, project1.moneyCollected)
    }

    @Test
    fun actualPercentageCompletedTest(){
        val townMock: Town = mock(Town::class.java)
        val donationMock: Donation = mock(Donation::class.java)
        val donorUserMock: DonorUser = mock(DonorUser::class.java)
        val startDateMock: LocalDate = mock(LocalDate::class.java)
        val finishDateMock: LocalDate = mock(LocalDate::class.java)
        var project1 = CrowdfundingProject("Project1", townMock, startDateMock, finishDateMock )
        Mockito.`when`(donationMock.from).thenReturn(donorUserMock)
        Mockito.`when`(donorUserMock.nick).thenReturn("Bill Gates")
        Mockito.`when`(donationMock.amount).thenReturn(350000)
        Mockito.`when`(townMock.population).thenReturn(3500)

        project1.receiveDonation(donationMock)

        Assert.assertEquals(10,project1.actualPercentageCompleted())
    }

    @Test
    fun actualStateTest(){
        val townMock: Town = mock(Town::class.java)
        val startDateMock: LocalDate = mock(LocalDate::class.java)
        val finishDateMock: LocalDate = mock(LocalDate::class.java)
        var project1 = CrowdfundingProject("Project1", townMock, startDateMock, finishDateMock )

        Assert.assertEquals(ProjectState.Opened, project1.projectState)
    }

    @Test
    fun placeToConnectTest(){
        val townMock: Town = mock(Town::class.java)
        val startDateMock: LocalDate = mock(LocalDate::class.java)
        val finishDateMock: LocalDate = mock(LocalDate::class.java)
        var project1 = CrowdfundingProject("Project1", townMock, startDateMock, finishDateMock )

        Mockito.`when`(townMock.name).thenReturn("Pergamino")

        Assert.assertEquals("Pergamino", project1.placeToConnect!!.name)
    }

    @Test
    fun projectNameTest(){
        val townMock: Town = mock(Town::class.java)
        val startDateMock: LocalDate = mock(LocalDate::class.java)
        val finishDateMock: LocalDate = mock(LocalDate::class.java)
        var project1 = CrowdfundingProject("Project1", townMock, startDateMock, finishDateMock )

        Assert.assertEquals("Project1", project1.name)
    }

    @Test
    fun changePricePerInhabitantTest(){
        val townMock: Town = mock(Town::class.java)
        val startDateMock: LocalDate = mock(LocalDate::class.java)
        val finishDateMock: LocalDate = mock(LocalDate::class.java)
        var project1 = CrowdfundingProject("Project1", townMock, startDateMock, finishDateMock )

        project1.changePricePerInhabitant(30000)

        Assert.assertEquals(30000,project1.pricePerInhabitant)
    }

    @Test
    fun changePercentageToCompleteTest(){
        val townMock: Town = mock(Town::class.java)
        val startDateMock: LocalDate = mock(LocalDate::class.java)
        val finishDateMock: LocalDate = mock(LocalDate::class.java)
        var project1 = CrowdfundingProject("Project1", townMock, startDateMock, finishDateMock )

        project1.changePercentageNeeded(70)

        Assert.assertEquals(70,project1.percentageNeeded)
    }

    @Test
    fun datesProjectTest(){
        val townMock: Town = mock(Town::class.java)
        val startDateMock: LocalDate = mock(LocalDate::class.java)
        val finishDateMock: LocalDate = mock(LocalDate::class.java)
        var project1 = CrowdfundingProject("Project1", townMock, startDateMock, finishDateMock )

        Mockito.`when`(startDateMock.dayOfMonth).thenReturn(14)
        Mockito.`when`(finishDateMock.dayOfMonth).thenReturn(18)

        Assert.assertEquals(14, project1.startDate!!.dayOfMonth)
        Assert.assertEquals(18, project1.estimatedFinishDate!!.dayOfMonth)
    }


}