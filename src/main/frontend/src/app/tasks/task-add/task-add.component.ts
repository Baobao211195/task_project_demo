import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../task.service';
import {Task} from '../../task.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  addTaskValue = '';
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onAddTask(event) {
    let task: Task = new Task(event.target.value, false, this.getCurrentDate());
    this.taskService.addTask(task).subscribe((newTask: Task) => {
        this.addTaskValue = ' ';
        this.taskService.onTaskAdded.emit(newTask);

    });
  }

  getCurrentDate() {
    return new Date().toDateString();
  }




}
