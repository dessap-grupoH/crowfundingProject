package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.errors.*
import ar.unq.edu.desapp.grupoH.model.states.ProjectState
import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import java.time.LocalDate
import javax.persistence.*

@Entity
class CrowdfundingProject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null

    var name: String? = null
    var percentageNeeded: Int = 100
    var pricePerInhabitant: Int = 1000

    @OneToOne
    var placeToConnect: Town? = null

    var startDate: LocalDate? = null
    var estimatedFinishDate: LocalDate? = null
    var moneyCollected: Int = 0
    var projectState: ProjectState = ProjectState.Opened

    @OneToMany(mappedBy = "nick", cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    var donorList: MutableList<DonorUser> = emptyList<DonorUser>().toMutableList()

    constructor()

    constructor(name: String, placeToConnect: Town, startDate: LocalDate, estimatedFinishDate: LocalDate) {
        this.name = name
        this.placeToConnect = placeToConnect
        this.startDate = startDate
        this.estimatedFinishDate = estimatedFinishDate
    }

    fun changePricePerInhabitant(newPrice: Int){
        this.pricePerInhabitant = pricePerInhabitantCheck(newPrice)
    }

    fun changePercentageNeeded(newPercentage: Int){
        this.percentageNeeded = percentageNeededCheck(newPercentage)
    }

    fun moneyRequiredToCompleteProject(): Int{
        return (this.placeToConnect!!.population * this.percentageNeeded / 100) * this.pricePerInhabitant
    }

    private fun pricePerInhabitantCheck(price: Int): Int {
        if (price in 0..100000){
            return price
        }else{
            throw PricePerInhabitantOutOfRange(ModelMessages.pricePerInhabitantOutOfRange)
        }
    }

    private fun percentageNeededCheck(percentage: Int): Int {
        if (percentage in 50..100){
            return percentage
        }else{
            throw PercentageToCompleteProjectOutOfRange(ModelMessages.percentageToCompleteProjectOutOfRange)
        }
    }

    fun receiveDonation(donation: Donation){
        this.donorList.add(donation.from)
        this.moneyCollected += donation.amount
    }

    fun actualPercentageCompleted(): Int{
        return (this.moneyCollected * 100) / this.moneyRequiredToCompleteProject()
    }

}