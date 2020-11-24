package ar.unq.edu.desapp.grupoH

import ar.unq.edu.desapp.grupoH.security.JWTAuthFilter
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter

@SpringBootApplication
class ProjectApplication

fun main(args: Array<String>) {
	runApplication<ProjectApplication>(*args)
}
@EnableWebSecurity
@EnableScheduling
@Configuration
internal class WebSecurityConfig : WebSecurityConfigurerAdapter() {
	@Throws(Exception::class)
	override fun configure(http: HttpSecurity) {
		http.cors()
				.and().csrf().disable()
				.addFilterAfter(JWTAuthFilter(), UsernamePasswordAuthenticationFilter::class.java)
				.authorizeRequests()
				.antMatchers("/api/user/login", "/api/user/loginAuth0", "/api/user/register", "/v2/api-docs", "/configuration/ui", "/swagger-resources/**", "/configuration/**", "/swagger-ui.html", "/webjars/**").permitAll()
				.anyRequest().authenticated()
	}
}
