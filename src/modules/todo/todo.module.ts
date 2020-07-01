import { Module } from '@nestjs/common';
import { TodoController } from './controllers';

@Module({
   controllers: [
      TodoController,
   ],
})
export class TodoModule {}
