package taskly.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import taskly.backend.model.Task;
import taskly.backend.service.TaskService;

import java.util.List;

@RestController
public class TaskController {

  @Autowired
  TaskService taskService =  new TaskService();

  @GetMapping("/api/tasks")
  public List<Task> getTask(){
    return taskService.getTasks();
  }

  @GetMapping("/api/task/{id}")
  public Task getTaskById(@PathVariable int id){
    return taskService.getTaskById(id);
  }

  @PutMapping("/api/task")
  public String putTask(@RequestBody Task task){
    taskService.addTask(task);
    return "success";
  }
}
