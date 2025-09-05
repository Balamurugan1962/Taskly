package taskly.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import taskly.backend.model.Task;
import taskly.backend.service.TaskService;

import java.util.List;

@RestController
public class TaskController {

  @Autowired
  private TaskService taskService;


  @GetMapping("/api/tasks")
  public List<Task> getTask(){
    return taskService.getTasks();
  }


  @GetMapping("/api/task/{id}")
  public Task getTaskById(@PathVariable Long id){
    return taskService.getTaskById(id);
  }


  @PutMapping("/api/task")
  public String putTask(@RequestBody Task task){
    taskService.addTask(task);
    return "success";
  }

  @PostMapping("/api/task/{id}")
  public String postTask(@PathVariable Long id,@RequestBody Task task){
    return taskService.updateTask(id,task);
  }

  @DeleteMapping("/api/task/{id}")
  public String deleteTask(@PathVariable Long id){
    return taskService.deleteTask(id);
  }
}
