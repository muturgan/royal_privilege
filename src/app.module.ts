import { Module, OnApplicationShutdown } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { configModule } from './modules/config/config.module';
import { TodoModule } from './modules/todo/todo.module';

@Module({
   imports: [
      configModule,
      MongooseModule.forRootAsync({
         useFactory: async (configService: ConfigService) => {
            const dbHost = configService.get('DB_HOST');
            const dbPort = configService.get('DB_PORT');
            const dbUser = configService.get('DB_USER');
            const dbPass = configService.get('DB_PASS');
            const dbName = configService.get('DB_NAME');

            return {
               uri: `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`,
            };
         },
         inject: [ConfigService],
      }),
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
