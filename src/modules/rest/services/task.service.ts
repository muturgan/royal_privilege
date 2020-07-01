import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TaskDocument } from '../schemas';
import { CreateTaskDto } from '../dto';

@Injectable()
export class TaskService
{
   constructor(
      @InjectModel(TaskDocument.name)
      private readonly _taskModel: Model<TaskDocument>,
   ) {}


   public create(taskToCreate: CreateTaskDto): Promise<TaskDocument>
   {
      const newTask = new this._taskModel(taskToCreate);
      return newTask.save();
   }

   public findAll(): Promise<TaskDocument[]> {
      return this._taskModel.find().exec();
   }
}