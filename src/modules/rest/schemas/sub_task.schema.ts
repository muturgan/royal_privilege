import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ISubTask } from '../../../domain/entities';

@Schema()
export class SubTaskDocument extends Document implements ISubTask
{
   constructor(subtask: ISubTask)
   {
      console.info('subtask constructor!');
      super();

      this.title = subtask.title;
      this.description = subtask.description;
      this.isActive = subtask.isActive;
      this.isDone = subtask.isDone;
   }

   @Prop({required: true})
   public title: string;

   @Prop({required: true})
   public description: string;

   @Prop({default: false})
   public isActive: boolean;

   @Prop({default: false})
   public isDone: boolean;
}

export const SubTaskSchema: MongooseSchema<SubTaskDocument> = SchemaFactory.createForClass(SubTaskDocument);