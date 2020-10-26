package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.Generated

@Generated
data class DonationRequest(val paymentMethod: PaymentMethod, val donatorId: Int, val projectId: Int, val amount: Int, val comment: String)