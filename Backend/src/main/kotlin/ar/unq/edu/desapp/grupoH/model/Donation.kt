package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import java.time.LocalDate

class Donation(val date: LocalDate?, val paymentMethod: PaymentMethod, val amount: Int, val projectTo: CrowdfundingProject, val from: DonorUser, val comment: String)
