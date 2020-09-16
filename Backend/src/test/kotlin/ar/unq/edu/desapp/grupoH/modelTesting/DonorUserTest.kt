package ar.unq.edu.desapp.grupoH.modelTesting

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.PaymentMethod
import ar.unq.edu.desapp.grupoH.model.Town
import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import ar.unq.edu.desapp.grupoH.model.errors.InvalidAmountForDonation
import org.junit.Assert
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.fail
import org.mockito.Mockito.`when`
import org.mockito.Mockito.mock


class DonorUserTest {

    private val user1 = DonorUser("user1", "123456", "user1@gmail.com", "1x")
    private val projectMock: CrowdfundingProject = mock(CrowdfundingProject::class.java)
    private val project2Mock: CrowdfundingProject = mock(CrowdfundingProject::class.java)
    private val townMock: Town = mock(Town::class.java)
    private val town2Mock: Town = mock(Town::class.java)

    @BeforeEach
    fun settingMockedData(){
        `when`(projectMock.placeToConnect).thenReturn(townMock)
        `when`(project2Mock.placeToConnect).thenReturn(town2Mock)
        `when`(projectMock.name).thenReturn("bigProject")
        `when`(project2Mock.name).thenReturn("littleProject")
        `when`(townMock.population).thenReturn(1500)
    }


    @Test
    fun makeDonnationTest(){
        user1.makeDonation(PaymentMethod.DebitCard,1500,projectMock,"Donacion de 1500$")
        Assert.assertEquals(4500, user1.totalPoints())
//        user1.makeDonation(PaymentMethod.DebitCard,200,projectMock,"Donacion de 100$")
//        Assert.assertEquals(5200, user1.totalPoints()) //TODO(algo raro pasa aca)
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
        Assert.assertEquals(false, user1.moreThanOneDonationThisMont())

        user1.makeDonation(PaymentMethod.DebitCard,1500,projectMock,"Donacion de 1500$")

        Assert.assertEquals(false, user1.moreThanOneDonationThisMont())

        user1.makeDonation(PaymentMethod.DebitCard,200,project2Mock,"Donacion de 200$")

        Assert.assertTrue(user1.moreThanOneDonationThisMont())
    }



}