package ar.unq.edu.desapp.grupoH

import ar.unq.edu.desapp.grupoH.services.H2Data
import ar.unq.edu.desapp.grupoH.services.ProjectRepository
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.context.annotation.ComponentScan
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.context.annotation.Bean
import org.springframework.boot.ApplicationRunner

@SpringBootApplication
@ComponentScan(basePackages = ["ar.unq.edu.desapp.grupoH.*"])
@EnableJpaRepositories("ar.unq.edu.desapp.grupoH.*")
@EntityScan("ar.unq.edu.desapp.grupoH.*")
class ProjectApplication {

	var data = H2Data

	@Bean
	fun run(repository : ProjectRepository) = ApplicationRunner {
		repository.save(data.project1)
	}

	fun start(){
		runApplication<ProjectApplication>()
	}
}

fun main(args: Array<String>) {
	runApplication<ProjectApplication>(*args)
}