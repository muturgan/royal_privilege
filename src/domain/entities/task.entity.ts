import { ISubTask, INewSubTaskArgument, SubTask } from './sub_task.entity';

export interface ITask {
   title: string;
   description: string;
   isActive: boolean;
   isDone: boolean;
   subTasks: ISubTask[];
}

export interface INewTaskArgument {
   title: string;
   description: string;
   subTasks?: INewSubTaskArgument[];
}

export class Task implements ITask
{
   public title: string;
   public description: string;
   public subTasks: ISubTask[];

   constructor(task: INewTaskArgument)
   {
      this.title = task.title;
      this.description = task.description;
      this.subTasks = task.subTasks
         ? task.subTasks.map(item => new SubTask(item))
         : [];
   }


   public get isActive(): boolean
   {
      return this.subTasks.some(sub => sub.isActive);
   }

   public get isDone(): boolean
   {
      return this.subTasks.length > 0
         &&  this.subTasks.every(sub => sub.isDone);
   }
}