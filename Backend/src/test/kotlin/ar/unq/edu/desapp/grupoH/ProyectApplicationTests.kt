package ar.unq.edu.desapp.grupoH

import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import ar.unq.edu.desapp.grupoH.main

@SpringBootTest
class ProyectApplicationTests {

	@Test
	fun contextLoads() {
	}

	@Test
	fun mainTest() {
		main(emptyArray());
	}

}
