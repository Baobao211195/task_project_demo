import { Component, OnInit } from '@angular/core';
import {Task} from '../../task.model';
import {TaskService} from '../../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task [] = [];
  constructor(private taskService: TaskService) { }


  ngOnInit() {
     this.taskService.listTasks()
      .subscribe(
        (tasks: Task[]) => {
          this.tasks = tasks;
        },
        (error => console.log(error))
      );
      this.taskService.onTaskAdded.subscribe((task: Task) => this.tasks.push(task));
  }
  getDueDateLable(task: Task) {
    return task.completed ? 'label-success' : 'label-primary';
  }

  onTaskChange(event, task) {
    this.taskService.saveTask(task, event.target.checked).subscribe();
  }

}
