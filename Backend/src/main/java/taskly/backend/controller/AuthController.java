package taskly.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import taskly.backend.model.UserEntity;
import taskly.backend.service.AuthService;

import java.util.List;

@RestController
public class AuthController {

  @Autowired
  private AuthService authService;

  @GetMapping("/api/users")
  public List<UserEntity> getUsers() {
    return authService.getUsers();
  }
  @PostMapping("/api/auth")
  public String login(@RequestParam String username, @RequestParam String password){
    if(!authService.checkUsername(username))
      return "Username Doesn't Exist";
    else
      return authService.checkLogin(username, password);
  }

  @PutMapping("/api/auth")
  public String signup(@RequestParam String username, @RequestParam String password){
    if(authService.checkUsername(username)) return "User already exists";
    else return authService.addUser(username,password);
  }

}
