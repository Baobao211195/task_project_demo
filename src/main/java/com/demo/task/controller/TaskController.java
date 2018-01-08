package com.demo.task.controller;

import com.demo.task.domain.Task;
import com.demo.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin("*")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @RequestMapping(value = {"", "/"})
    public HttpEntity<List<Task>> listTask(){

        List<Task> taskList = taskService.listTask();
        return new ResponseEntity<List<Task>>(taskList, HttpStatus.OK);
    }

    @RequestMapping (value = "/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Task> saveTask(@RequestBody Task task){
        Task tk = taskService.save(task);
        System.out.println(tk);
        return new ResponseEntity<Task>(tk, HttpStatus.OK);
    }

}
