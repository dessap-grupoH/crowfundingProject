package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import java.time.LocalDate
import javax.persistence.*

@Entity
class Donation(
        var date: LocalDate?,
        var paymentMethod: PaymentMethod,
        var amount: Int,
        @ManyToOne
        var projectTo: CrowdfundingProject,
        @ManyToOne
        var from: DonorUser,
        var comment: String
){
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null
}
