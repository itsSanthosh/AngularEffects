import { Injectable } from '@angular/core';
import {} from '@ngrx/store';
import {AppState,TaskItem} from './store/state/task.state'
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public taskList:TaskItem[]=[{id:3,task:'third task'},{id:4,task:'Fourth task'}];
  private apiURL='https://jsonplaceholder.typicode.com/todos/1';
  constructor(
    public _http:HttpClient
  ) {
  }
  getTasks():Observable<TaskItem[]>{
     //return this._http.get(this.apiURL);
     return of(this.taskList);
  }
}
