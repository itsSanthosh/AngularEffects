import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { AppState, TaskState } from '../store/state/task.state';
import { TaskActionsType } from '../store/actions/task.actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public taskList:TaskState;
  constructor(public store:Store<AppState>) { }

  ngOnInit() {
    this.store.select(x=>{return x}).subscribe(val=>{
      console.log(val['TaskReducer']);
      this.taskList=val['TaskReducer'];
    });
  }
  AddTask(id:number,task:string){
    this.store.dispatch({type:TaskActionsType.AddNewTask,payload:{id:id,task:task}});
  }
  LoadTasks(){
    this.store.dispatch({type:TaskActionsType.getTaskSuccess,payload:{}});
  }

}
