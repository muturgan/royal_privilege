import { Module, OnApplicationShutdown } from '@nestjs/common';
import { configModule } from './modules/config/config.module';
import { mongooseModule } from './modules/mongoose/mongoose.module';
import { RestModule } from './modules/rest/rest.module';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
   imports: [
      configModule,
      mongooseModule,
      RestModule,
   ],
})
export class AppModule implements OnApplicationShutdown
{
   constructor(
      @InjectConnection() private readonly _conn: Connection,
   ) {}

   public onApplicationShutdown(signal: string): Promise<void>
   {
      console.info(`\nclosing mongoose connection on ${signal}...`);
      return this._conn.close();
   }
}
