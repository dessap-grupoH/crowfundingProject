package ar.unq.edu.desapp.grupoH.services

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import ar.unq.edu.desapp.grupoH.model.Town
import ar.unq.edu.desapp.grupoH.model.user.DonorUser
import java.time.LocalDate

object H2Data{

    //Dates
    var date1 = LocalDate.now()
    var date2 = LocalDate.of(2021,10,14)

    //Towns
    var pergamino = Town("Pergamino", "Buenos Aires", 32000)
    var carmenDePatagones = Town("Carmen de Patagones", "Buenos Aires", 11000)
    var tandil = Town("Tandil", "Buenos Aires", 32000)

    //Projects
    var project1 = CrowdfundingProject("Project1", pergamino, date1, date2)
    var project2 = CrowdfundingProject("Project2", carmenDePatagones, date1, date2 )
    var project3 = CrowdfundingProject("Project3", tandil, date1, date2)

    //Users
    var lucas = DonorUser("lmur", "1234", "lmur@gmail.com", "lmur")
    var rodrigo = DonorUser("rgarcia", "1234", "rgarcia@gmail.com", "rgarcia")

}