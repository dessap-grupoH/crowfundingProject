package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import java.time.LocalDate
import javax.persistence.*

@Entity(name = "Donation")
class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null

    lateinit var date: LocalDate

    @Enumerated(EnumType.STRING)
    lateinit var paymentMethod: PaymentMethod

    var amount: Int = 0

    @JsonIgnoreProperties("donors", "donationList")
    @ManyToOne
    lateinit var projectTo: CrowdfundingProject

    @JsonIgnoreProperties("donationList")
    @ManyToOne
    lateinit var from: DonorUser

    lateinit var comment: String

    constructor()

   constructor(date: LocalDate, paymentMethod: PaymentMethod, amount: Int, projectTo : CrowdfundingProject, from: DonorUser, comment: String) {
       this.date = date
       this.paymentMethod = paymentMethod
       this.amount = amount
       this.projectTo = projectTo
       this.from = from
       this.comment = comment
   }
}
