import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskDocument } from '../schemas';
import { CreateTaskDto } from '../dto';
import { TaskService } from '../services';

@UsePipes(new ValidationPipe({transform: true}))


@Controller('todo')
export class TodoController {

   constructor(
      private readonly _taskService: TaskService,
   ) {}

   @Get('/')
   public index(): Promise<TaskDocument[]>
   {
      return this._taskService.findAll();
   }

   @Post('/')
   public createTask(@Body() body: CreateTaskDto): Promise<TaskDocument>
   {
      return this._taskService.create(body);
   }
}
