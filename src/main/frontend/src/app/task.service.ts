import {EventEmitter, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Task} from './task.model';

const BASE_URL = 'http://localhost:8080';

@Injectable()
export class TaskService {

  onTaskAdded = new EventEmitter<Task>();

  constructor( private http: Http) { }

  listTasks() {
    return this.http.get(`${BASE_URL}/api/tasks`).map(resp => resp.json());
  }

  saveTask(task: Task, checked: boolean) {
    task.completed = checked;
    return this.http.post(`${BASE_URL}/api/tasks/save`, task).map(resp => resp.json());
  }

  addTask(task) {
    return this.http.post(`${BASE_URL}/api/tasks/save`, task).map(response => response.json());
  }
}
