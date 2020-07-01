import { Module, OnApplicationShutdown } from '@nestjs/common';
import { configModule } from './config/config.module';
import { TodoModule } from './todo/todo.module';

@Module({
   imports: [
      configModule,
      TodoModule,
   ],
})
export class AppModule implements OnApplicationShutdown
{
   public async onApplicationShutdown(signal: string): Promise<void>
   {
      return console.info(`\nshutdown signal is ${signal}`);
   }
}
