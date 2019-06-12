import { Effect, Actions, ofType } from "@ngrx/effects";
import {TaskActionsType} from '../actions/task.actions';
import { Injectable } from '@angular/core';
import {map, switchMap, catchError} from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { TasksService } from 'src/app/tasks.service';

@Injectable()
export class TaskEffects{
    @Effect()
    getTasks=this.actions.pipe(
        ofType(TaskActionsType.getTaskSuccess),
        switchMap(()=>this._service.getTasks().pipe(
            //Emit a success action when api response is successfull
            map(tasks=>({type:TaskActionsType.getTasks,payload:{tasks}})),
            //Emit a failure action on api error
            catchError(error=>{return error})
        ))
    );

    constructor(
        public actions:Actions,
        public _service:TasksService
    ){
        this.getTasks.subscribe(val=>{
            val;
            debugger;
        })
        
    }
    
}