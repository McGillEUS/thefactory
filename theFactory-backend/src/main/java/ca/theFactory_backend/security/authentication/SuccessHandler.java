//package ca.theFactory_backend.security.authentication;
//
//import ca.theFactory_backend.model.Person;
//import ca.theFactory_backend.repositories.PersonRepository;
//import ca.theFactory_backend.services.PersonService;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
//import org.springframework.security.web.DefaultRedirectStrategy;
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//import org.springframework.stereotype.Component;
//
//import java.io.IOException;
//
//@Component
//public class SuccessHandler implements AuthenticationSuccessHandler {
//    @Autowired
//    private PersonRepository personRepository;
//
//    @Autowired
//    private PersonService personService;
//
//    @Override
//    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
//        String redirectUrl = null;
//        if (authentication.getPrincipal() instanceof DefaultOAuth2User oAuth2User) {
//            String email = oAuth2User.getAttribute("email") != null ? oAuth2User.getAttribute("email") : oAuth2User.getAttribute("login") + "@gmail.com";
//
//            // If the user does not exist in OUR database, create a new user
//            if (personRepository.findByEmail(email).isEmpty()) {
//                Person person = new Person();
//                person.setEmail(email);
//                person.setFirstName(oAuth2User.getAttribute("given_name"));
//                person.setLastName(oAuth2User.getAttribute("family_name"));
//                person.setPhoneNumber(oAuth2User.getAttribute("phone_number"));
//                personRepository.save(person);
//
//                // assign the user the role of member
//                personService.assignRole(person, "member");
//            }
//
//            redirectUrl = "/";
//
//        }
//        new DefaultRedirectStrategy().sendRedirect(request, response, redirectUrl);
//    }
//}
