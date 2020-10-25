package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.errors.*
import ar.unq.edu.desapp.grupoH.model.states.ProjectState
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import java.time.LocalDate
import javax.persistence.*

@Entity(name = "Crowdfunding_Project")
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
    @Enumerated(EnumType.STRING)
    var projectState: ProjectState = ProjectState.Opened

    @JsonIgnore
    @OneToMany(mappedBy = "projectTo", cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    var donationList: MutableList<Donation> = emptyList<Donation>().toMutableList()

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

    fun getMoneyRequired(): Int{
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

    @JsonIgnoreProperties("donationList")
    fun getDonors() : List<DonorResponse> = this.donationList.groupBy { e -> e.from.nick }.map { (k, v) -> DonorResponse(k, v.sumBy { s -> s.amount }) }


    fun receiveDonation(donation: Donation){
        this.donationList.add(donation)
        this.moneyCollected += donation.amount
    }

    fun actualPercentageCompleted(): Int{
        return (this.moneyCollected * 100) / this.getMoneyRequired()
    }
}

