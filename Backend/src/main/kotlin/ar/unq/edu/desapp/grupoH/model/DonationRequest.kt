package ar.unq.edu.desapp.grupoH.model

data class DonationRequest(val paymentMethod: PaymentMethod, val donatorId: Int, val projectId: Int, val amount: Int, val comment: String)