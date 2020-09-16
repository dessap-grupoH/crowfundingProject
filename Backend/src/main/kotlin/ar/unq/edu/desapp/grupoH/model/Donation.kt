package ar.unq.edu.desapp.grupoH.model

import java.time.LocalDate

class Donation(val date: LocalDate?, val paymentMethod: PaymentMethod,
               val amount: Int, val projectTo: CrowdfundingProject, val from: User, val comment: String){

}

