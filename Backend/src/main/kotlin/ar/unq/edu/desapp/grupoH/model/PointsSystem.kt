package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.user.DonorUser

object PointsSystem {

    private fun pointValueAccordingToAmount(amount: Int) : Int = if (amount > 1000) amount else 0

    private fun pointValueAccordingToPopulation(place: Town, amount: Int): Int = if (place.population < 2000) amount*2 else 0

    private fun pointValueAccordingToProjectsParticipations(donorUser: DonorUser): Int = if (donorUser.willBeSecondMonthlyDonation()) 500 else 0

    fun pointGenerator(donorUser: DonorUser, amount: Int, project: CrowdfundingProject): Int {
        return  pointValueAccordingToAmount(amount) +
                pointValueAccordingToPopulation(project.placeToConnect!!, amount) +
                pointValueAccordingToProjectsParticipations(donorUser)

    }


}