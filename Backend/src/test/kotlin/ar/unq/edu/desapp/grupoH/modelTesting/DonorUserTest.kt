package ar.unq.edu.desapp.grupoH.modelTesting

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.PaymentMethod
import ar.unq.edu.desapp.grupoH.model.Town
import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import ar.unq.edu.desapp.grupoH.model.errors.InvalidAmountForDonation
import org.junit.Assert
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.fail
import org.mockito.Mockito.`when`
import org.mockito.Mockito.mock

class DonorUserTest {

    @Test
    fun makeValidDonationTest(){
        val user1 = DonorUser("user1", "123456", "user1@gmail.com", "1x")
        val projectMock: CrowdfundingProject = mock(CrowdfundingProject::class.java)
        val townMock: Town = mock(Town::class.java)

        `when`(projectMock.placeToConnect).thenReturn(townMock)
        `when`(townMock.population).thenReturn(1500)

        user1.makeDonation(PaymentMethod.DebitCard,1500,projectMock,"Donacion de 1500$")

        Assert.assertEquals(4500, user1.actualPoints)
    }

    @Test
    fun makeTwoValidDonationInSameMonthTest(){
        val user1 = DonorUser("user1", "123456", "user1@gmail.com", "1x")
        val projectMock: CrowdfundingProject = mock(CrowdfundingProject::class.java)
        val townMock: Town = mock(Town::class.java)

        `when`(projectMock.placeToConnect).thenReturn(townMock)
        `when`(townMock.population).thenReturn(1500)

        user1.makeDonation(PaymentMethod.DebitCard,1500,projectMock,"Donacion de 1500$")
        user1.makeDonation(PaymentMethod.DebitCard,200,projectMock,"Donacion de 200$")

        Assert.assertEquals(5400, user1.actualPoints)
    }


    @Test
    fun makeDonationWithInvalidAmount(){
        val user1 = DonorUser("user1", "123456", "user1@gmail.com", "1x")
        val projectMock: CrowdfundingProject = mock(CrowdfundingProject::class.java)

        try{
        user1
                .makeDonation(PaymentMethod.DebitCard,-100,projectMock,"Donacion de -100$")
            fail("was expected an error about the invalid amount")
        }catch (ex: InvalidAmountForDonation){
            Assert.assertEquals("El monto que intenta donar es invalido.", ex.exMessage)
        }
    }

    @Test
    fun isSecondMonthlyDonation(){
        val user1 = DonorUser("user1", "123456", "user1@gmail.com", "1x")
        val projectMock: CrowdfundingProject = mock(CrowdfundingProject::class.java)
        val townMock: Town = mock(Town::class.java)

        `when`(projectMock.placeToConnect).thenReturn(townMock)
        `when`(townMock.population).thenReturn(1500)

        Assert.assertEquals(false, user1.isSecondMonthlyDonation())

        user1.makeDonation(PaymentMethod.DebitCard,1500,projectMock,"Donacion de 1500$")

        Assert.assertFalse(user1.isSecondMonthlyDonation())

        user1.makeDonation(PaymentMethod.DebitCard,200,projectMock,"Donacion de 200$")

        Assert.assertTrue(user1.isSecondMonthlyDonation())

        user1.makeDonation(PaymentMethod.DebitCard,500,projectMock,"Donacion de 500$")

        Assert.assertFalse(user1.isSecondMonthlyDonation())
    }

}