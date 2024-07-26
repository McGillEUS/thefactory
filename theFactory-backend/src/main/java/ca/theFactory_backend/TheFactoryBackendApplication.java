package ca.theFactory_backend;

import ca.theFactory_backend.config.YamlConfig;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TheFactoryBackendApplication {

	@Autowired
	private YamlConfig yamlConfig;

	public static void main(String[] args) {
		SpringApplication.run(TheFactoryBackendApplication.class, args);
	}

	public void run(String... args) {
		System.out.println(yamlConfig);
	}
}
