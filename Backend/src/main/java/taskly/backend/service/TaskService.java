package taskly.backend.service;

import org.springframework.stereotype.Service;
import taskly.backend.model.Task;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TaskService {

  private List<Task> tasks = new ArrayList<>();

  public TaskService() {
    tasks.add(new Task(0, "Meet Anjj", "Meet Anj and have a convo"));
    tasks.add(new Task(1, "MPMC Assignment", "Do MPMC Assignment"));
    tasks.add(new Task(2, "AI Assignment", "Do AI Assignment"));
  }

  public List<Task> getTasks() {
    return tasks;
  }

  public Task getTaskById(int Id){
    for (Task task:tasks){
      if(task.getId()==Id){
        return task;
      }
    }
    return null;
  }

  public void addTask(Task task) {
    tasks.add(task);
  }
}
