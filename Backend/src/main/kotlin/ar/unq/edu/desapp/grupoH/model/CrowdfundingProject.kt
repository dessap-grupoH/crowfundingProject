package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.errors.ModelMessages
import ar.unq.edu.desapp.grupoH.model.errors.PercentageToCompleteProjectOutOfRange
import ar.unq.edu.desapp.grupoH.model.errors.PricePerHabitantOutOfRange
import ar.unq.edu.desapp.grupoH.model.states.ProjectState
import java.time.LocalDate

class CrowdfundingProject {

    var name: String? = null
    var percentageNeeded: Int = 100
    var pricePerHabitant: Int = 1000
    var placeToConnect: Town? = null
    var startDate: LocalDate? = null
    var estimatedFinishDate: LocalDate? = null
    var moneyCollected: Int = 0
    var projectState: ProjectState = ProjectState.Opened
    var donorList: MutableList<String> = emptyList<String>().toMutableList()

    constructor(name: String, placeToConnect: Town, startDate: LocalDate, estimatedFinishDate: LocalDate){
        this.name = name
        this.placeToConnect = placeToConnect
        this.startDate = startDate
        this.estimatedFinishDate = estimatedFinishDate
    }

    fun changePricePerHabitant(newPrice: Int){
        this.pricePerHabitant = pricePerHabitanteCheck(newPrice)
    }

    fun changePercentageNeeded(newPercetage: Int){
        this.percentageNeeded = percentageNeededCheck(newPercetage)
    }

    fun moneyRequiredToCompleteProject(): Int{
        return (this.placeToConnect!!.population * this.percentageNeeded / 100) * this.pricePerHabitant
    }

    fun pricePerHabitanteCheck(price: Int): Int {
        if (price in 0..100000){
            return price
        }else{
            throw PricePerHabitantOutOfRange(ModelMessages.pricePerHabitantOutOfRange)
        }
    }

    fun percentageNeededCheck(percentage: Int): Int {
        if (percentage in 50..100){
            return percentage
        }else{
            throw PercentageToCompleteProjectOutOfRange(ModelMessages.percentageToCompleteProjectOutOfRange)
        }
    }

    fun recieveDonation(donation: Donation){
        this.donorList.add(donation.from.nick)
        this.moneyCollected += donation.amount
    }

    fun actualPercentageCompleted(): Int{
        return (this.moneyCollected * 100) / this.moneyRequiredToCompleteProject()
    }


}