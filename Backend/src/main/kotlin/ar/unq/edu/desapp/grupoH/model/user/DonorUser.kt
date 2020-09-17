package ar.unq.edu.desapp.grupoH.model.user

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.Donation
import ar.unq.edu.desapp.grupoH.model.PaymentMethod
import ar.unq.edu.desapp.grupoH.model.PointsSystem
import ar.unq.edu.desapp.grupoH.model.errors.InvalidAmountForDonation
import ar.unq.edu.desapp.grupoH.model.errors.ModelMessages
import java.time.LocalDate

class DonorUser(username: String, password: String, email: String, var nick: String):
        User(username,password,email) {

    var donationList: MutableList<Donation> = emptyList<Donation>().toMutableList()

    var actualPoints : Int = 0

    fun makeDonation(paymentMethod: PaymentMethod, amount: Int, to: CrowdfundingProject, comment: String){
        if(amount > 0){
            val newDonation = Donation(LocalDate.now(), paymentMethod, amount, to, this, comment)
            this.donationList.add(newDonation)
            to.receiveDonation(newDonation)
            actualPoints += PointsSystem.pointGenerator(this, amount, to)
        }else{
            throw InvalidAmountForDonation(ModelMessages.invalidAmountDonate)
        }
    }

    fun isSecondMonthlyDonation(): Boolean = this.donationList.filter { it.date!!.monthValue == LocalDate.now().monthValue }.size == 2

}