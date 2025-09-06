package taskly.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import taskly.backend.model.UserEntity;
import taskly.backend.repository.UserRepo;

import java.util.List;

@Service
public class AuthService {

  @Autowired
  private UserRepo userRepo;

  public List<UserEntity> getUsers(){
    return userRepo.findAll();
  }
  public String checkLogin(String username, String password){

    UserEntity user = userRepo.getReferenceById(username);

    if(user.getPassword().equals(password))
      return "Success";
    else
      return "Fail";
  }

  public Boolean checkUsername(String username) {
      return userRepo.existsById(username);
  }

  public String addUser(String username, String password){
    UserEntity user = new UserEntity();
    user.setUsername(username);
    user.setPassword(password);
    userRepo.save(user);
    return "User added successfully";
  }
}
