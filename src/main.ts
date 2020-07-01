import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './modules/app.module';
import helmet from 'fastify-helmet';


async function bootstrap(): Promise<NestFastifyApplication>
{
   const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
   );

   app.register(helmet);

   app.enableShutdownHooks();

   const configService = app.get(ConfigService);
   const PORT = configService.get('PORT');
   const HOST = configService.get('HOST');

   await app.listen(PORT, HOST)
      .then(() => console.info(`App running on port ${PORT}`));

   return app;
}
export default bootstrap();
