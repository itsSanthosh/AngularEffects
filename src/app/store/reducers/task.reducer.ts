import {TaskActionsType} from '../actions/task.actions';
import {AppState, TaskItem} from '../state/task.state';

const initialTask:TaskItem[]=[{id:1,task:'first item'}]

export function TaskReducer(
    state:TaskItem[]=initialTask,
    action:{type:any,payload:TaskItem[]}
){
    switch (action.type) {
        case TaskActionsType.AddNewTask:
            return [...state,action.payload];
            break;
        case TaskActionsType.Failure:
            return state
            break;            
        case TaskActionsType.getTasks:
            debugger;
            // state.push(action.payload);
            return state;
            break;            
        default:
            return state;
            break;
    }
}