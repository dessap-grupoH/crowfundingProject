package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.errors.InvalidAmountForDonation
import ar.unq.edu.desapp.grupoH.model.errors.ModelMessages
import java.time.LocalDate

class User(val username: String, val password: String, var email: String, var nick: String) {

    var donationList: MutableList<Donation> = emptyList<Donation>().toMutableList()

    fun makeDonation(paymentMethod: PaymentMethod, amount: Int, to: CrowdfundingProject, comment: String){
        if(amount > 0){
            val newDonation = Donation(LocalDate.now(), paymentMethod, amount,to ,this, comment)
            this.donationList.add(newDonation)
            to.recieveDonation(newDonation)
        }else{
            throw InvalidAmountForDonation(ModelMessages.invalidAmountDonate)
        }

    }

    fun moreThanOneProjectParticipation(): Boolean{
        var multiProjectDonor = false
        if(donationList.isNotEmpty()){
            val firstPointProject = donationList.first().projectTo.name
            multiProjectDonor = donationList.find { it.projectTo.name != firstPointProject } != null
        }
        return multiProjectDonor
    }

    fun totalPoints(): Int{
        var pointsValue = 0

        for (d in this.donationList){
            pointsValue += PointsSystem.pointGenerator(this, d.amount, d.projectTo)
        }

        return pointsValue
    }



}