package ar.unq.edu.desapp.grupoH.modelTesting.helpersAndData

import ar.unq.edu.desapp.grupoH.model.CrowdfundingProject
import java.time.LocalDate

class CrowdfundingProjectData {

    var townData = TownData()

    var startDateP1 = LocalDate.parse("2020-11-22")
    var estimatedFinishDateP1 = LocalDate.parse("2022-12-10")

    var startDateP2 = LocalDate.parse("2020-12-12")
    var estimatedFinishDateP2 = LocalDate.parse("2021-12-04")

    var startDateP3 = LocalDate.parse("2021-01-28")
    var estimatedFinishDateP3 = LocalDate.parse("2023-12-30")


    var project1 = CrowdfundingProject("project1", townData.town1, startDateP1, estimatedFinishDateP1 )

    var project2 = CrowdfundingProject("project2", townData.town2, startDateP2, estimatedFinishDateP2)

    var project3 = CrowdfundingProject("project3", townData.town3, startDateP3, estimatedFinishDateP3)
}