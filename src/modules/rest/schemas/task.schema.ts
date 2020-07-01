import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { SubTaskSchema, SubTaskDocument } from './sub_task.schema';
import { ITask } from '../../../domain/entities';

@Schema()
export class TaskDocument extends Document implements ITask
{
   constructor(task: ITask)
   {
      console.info('task constructor!');
      super();

      this.title = task.title;
      this.description = task.description;
      this.subTasks = task.subTasks.map(item => new SubTaskDocument(item));
   }

   @Prop({required: true})
   public title: string;

   @Prop({required: true})
   public description: string;

   @Prop({type: [SubTaskSchema], required: true})
   public subTasks: SubTaskDocument[];



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

export const TaskSchema: MongooseSchema<TaskDocument> = SchemaFactory.createForClass(TaskDocument);