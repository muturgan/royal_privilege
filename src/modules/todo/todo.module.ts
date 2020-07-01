import { Module, OnApplicationShutdown } from '@nestjs/common';
import { TodoController } from './controllers';

@Module({
   controllers: [
      TodoController,
   ],
})
export class TodoModule implements OnApplicationShutdown
{
   public async onApplicationShutdown(signal: string): Promise<void>
   {
      console.info(`\nshutdown signal is ${signal}`);
   }
}
