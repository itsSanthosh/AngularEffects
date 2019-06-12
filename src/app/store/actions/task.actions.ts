//Actions
export namespace TaskActionsType{
    export const AddNewTask='ADD NEW TASK';
    export const DeleteTask='DELETE A TASK';
    export const getTasks='GET_TASKS';
    export const Failure='ACTION_FAILED';
    export const getTaskSuccess='GET_TASK-SUCCESS';
}

export class AddNewTask{
    readonly AddNewTask = TaskActionsType.AddNewTask;
}

export class DeleteTask{
    readonly DeleteTask = TaskActionsType.DeleteTask;
}

export class getTasks{
    readonly GetTask=TaskActionsType.getTasks;
}

export class getTaskSuccess{
    readonly getTaskSuccess=TaskActionsType.getTaskSuccess;
}

export class Failure{
    readonly Failure=TaskActionsType.Failure;
}

export type TaskActions= AddNewTask | DeleteTask | getTasks | Failure | getTaskSuccess;