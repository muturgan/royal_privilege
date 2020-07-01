export interface ISubTask {
   title: string;
   description: string;
   isActive: boolean;
   isDone: boolean;
}

export interface INewSubTaskArgument {
   title: string;
   description: string;
   isActive?: boolean;
   isDone?: boolean;
}

export class SubTask implements ISubTask
{
   public title: string;
   public description: string;
   public isActive: boolean;
   public isDone: boolean;

   constructor(subtask: INewSubTaskArgument) {
      this.title = subtask.title;
      this.description = subtask.description;
      this.isActive = subtask.isActive === true;
      this.isDone = subtask.isDone === true;
   }
}