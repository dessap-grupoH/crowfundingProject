package ar.unq.edu.desapp.grupoH.model.errors

open class PricePerInhabitantOutOfRange(val exMessage: String): Exception(exMessage)

open class PercentageToCompleteProjectOutOfRange(val exMessage: String): Exception(exMessage)

open class InvalidAmountForDonation(val exMessage: String) : Exception(exMessage)





