import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService, ConfigModule } from '@nestjs/config';

export const mongooseModule = MongooseModule.forRootAsync
({
   imports: [ConfigModule],
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
});
