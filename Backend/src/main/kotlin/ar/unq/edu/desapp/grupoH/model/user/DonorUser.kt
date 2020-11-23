package ar.unq.edu.desapp.grupoH.model.user

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.Donation
import ar.unq.edu.desapp.grupoH.model.PaymentMethod
import ar.unq.edu.desapp.grupoH.model.PointsSystem
import ar.unq.edu.desapp.grupoH.model.errors.InvalidAmountForDonation
import ar.unq.edu.desapp.grupoH.model.errors.ModelMessages
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import java.time.LocalDate
import javax.persistence.*

@Entity
@DiscriminatorValue(value = "DonorUser")
class DonorUser : User {

    @JsonIgnoreProperties("from")
    @OneToMany(mappedBy = "from", cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    var donationList: MutableList<Donation> = emptyList<Donation>().toMutableList()

    var actualPoints : Int = 0

    @Transient
    var adminPermission = false

    lateinit var nick: String

    constructor()

    constructor(username : String, password: String, email: String, nick: String) : super(username, password, email) {
        this.nick = nick
    }

    fun makeDonation(paymentMethod: PaymentMethod, amount: Int, to: CrowdfundingProject, comment: String) : Donation{
        if(amount > 0){
            val gainedPoints = PointsSystem.pointGenerator(this, amount, to)
            val newDonation = Donation(LocalDate.now(), paymentMethod, amount, to, this, comment, gainedPoints)
            this.donationList.add(newDonation)
            to.receiveDonation(newDonation)
            this.actualPoints += gainedPoints
            return newDonation
        }else{
            throw InvalidAmountForDonation(ModelMessages.invalidAmountDonate)
        }
    }

    fun willBeSecondMonthlyDonation(): Boolean = this.donationList.filter { it.date.monthValue == LocalDate.now().monthValue }.size == 1

    override fun toString(): String {
        return "DonorUser(username='$username', password, email='$email, nick='$nick')"
    }

}