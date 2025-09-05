package taskly.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import taskly.backend.model.Task;
import taskly.backend.repository.TaskRepo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TaskService {

  @Autowired
  TaskRepo taskRepo;

  public List<Task> getTasks() {
    return taskRepo.findAll();
  }

  public Task getTaskById(Long Id){
    return taskRepo.findById(Id).orElse(null);
  }

  public String addTask(Task task) {
    taskRepo.save(task);
    return "success";
  }

  public String updateTask(Long id,Task task){
    Task existingTask = taskRepo.findById(id).orElse(new Task());

    existingTask.setName(task.getName());
    existingTask.setDescription(task.getDescription());

    taskRepo.save(existingTask);
    return "updated";
  }

  public String deleteTask(Long id){
    taskRepo.deleteById(id);
    return "deleted";
  }
}
