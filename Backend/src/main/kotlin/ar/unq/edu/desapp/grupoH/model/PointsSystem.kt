package ar.unq.edu.desapp.grupoH.model

import ar.unq.edu.desapp.grupoH.model.user.DonorUser

object PointsSystem {

    private fun pointValueAccordingToAmount(amount: Int) : Int{
        var pointValue = 0
        if(amount > 1000){
            pointValue = amount
        }
        return pointValue
    }

    private fun pointValueAccordingToPopulation(place: Town, amount: Int): Int{
        var pointValue = 0
        if (place.population < 2000){
            pointValue = amount * 2
        }
        return pointValue
    }

    private fun pointValueAccordintToProjectsParticipations(donorUser: DonorUser): Int{
        var pointValue = 0
        if (donorUser.moreThanOneDonationThisMont()){
            pointValue += 500
        }
        return pointValue
    }

    fun pointGenerator(donorUser: DonorUser, amount: Int, project: CrowdfundingProject): Int {
        return  pointValueAccordingToAmount(amount) +
                pointValueAccordingToPopulation(project.placeToConnect!!, amount) +
                pointValueAccordintToProjectsParticipations(donorUser)

    }


}