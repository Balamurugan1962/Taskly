package taskly.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
  @GetMapping("/api/test")
  public String getTest(){
    return "This is a sample test";
  }
}
