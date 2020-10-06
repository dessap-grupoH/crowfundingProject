package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import java.time.LocalDate
import javax.persistence.*

@Entity
class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null

    lateinit var date: LocalDate

    lateinit var paymentMethod: PaymentMethod

    var amount: Int = 0

    @ManyToOne
    lateinit var projectTo: CrowdfundingProject

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
