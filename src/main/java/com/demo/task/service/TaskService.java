package com.demo.task.service;

import com.demo.task.domain.Task;

import java.util.List;

public interface TaskService {
    List<Task> listTask();
    Task save(Task task);
}
