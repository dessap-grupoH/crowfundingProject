package ar.unq.edu.desapp.grupoH.archTest

import com.tngtech.archunit.core.importer.ClassFileImporter
import com.tngtech.archunit.junit.ArchUnitRunner
import com.tngtech.archunit.lang.ArchRule
import com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes
import org.junit.jupiter.api.Test
import org.junit.runner.RunWith
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.RestController


@RunWith(ArchUnitRunner::class)
class AppArchitectureTest {
    @Test
    fun testControllersSufix() {
        val importedClasses = ClassFileImporter().importPackages("ar.unq.edu.desapp.grupoH.controller")
        val myRule: ArchRule = classes()
                .that().areAnnotatedWith(RestController::class.java)
                .should().haveSimpleNameEndingWith("Controller")
        myRule.check(importedClasses)
    }

    @Test
    fun testServicesSufix() {
        val importedClasses = ClassFileImporter().importPackages("ar.unq.edu.desapp.grupoH.service")
        val myRule: ArchRule = classes()
                .that().areAnnotatedWith(Service::class.java)
                .should().haveSimpleNameEndingWith("Service")
        myRule.check(importedClasses)
    }

    @Test
    fun testRepositoriesSufix() {
        val importedClasses = ClassFileImporter().importPackages("ar.edu.unq.desapp.grupoH.repository")
        val myRule: ArchRule = classes()
                .that().areAnnotatedWith(Repository::class.java)
                .should().haveSimpleNameEndingWith("Repository")
        myRule.check(importedClasses)
    }

    @Test
    fun testControllersPackage() {
        val importedClasses = ClassFileImporter().importPackages("ar.edu.unq.desapp.grupoH")
        val myRule: ArchRule = classes()
                .that().haveSimpleNameEndingWith("Controller")
                .should().resideInAPackage("ar.edu.unq.desapp.grupoH.controller")
        myRule.check(importedClasses)
    }

    @Test
    fun testServicesPackage() {
        val importedClasses = ClassFileImporter().importPackages("ar.edu.unq.desapp.grupoH")
        val myRule: ArchRule = classes()
                .that().haveSimpleNameEndingWith("Service")
                .should().resideInAPackage("ar.edu.unq.desapp.grupoH.service")
        myRule.check(importedClasses)
    }

    @Test
    fun testRepositoriesPackage() {
        val importedClasses = ClassFileImporter().importPackages("ar.edu.unq.desapp.grupoH")
        val myRule: ArchRule = classes()
                .that().haveSimpleNameEndingWith("Repository")
                .should().resideInAPackage("ar.edu.unq.desapp.grupoH.repository")
        myRule.check(importedClasses)
    }

}