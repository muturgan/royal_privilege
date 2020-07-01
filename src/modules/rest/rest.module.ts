import { Module } from '@nestjs/common';
import { TodoController } from './controllers';
import { TaskService } from './services';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskDocument, TaskSchema, SubTaskDocument, SubTaskSchema } from './schemas';

@Module({
   imports: [
      MongooseModule.forFeature([
         {name: TaskDocument.name, schema: TaskSchema},
         {name: SubTaskDocument.name, schema: SubTaskSchema},
      ]),
   ],
   controllers: [TodoController],
   providers: [TaskService],
})
export class RestModule {}
