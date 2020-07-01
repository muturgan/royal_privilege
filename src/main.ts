import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './modules/app.module';
import helmet from 'fastify-helmet';

const PORT = Number(process.env.PORT);
const HOST = process.env.HOST as string;


async function bootstrap(): Promise<NestFastifyApplication>
{
   const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
   );

   app.register(helmet);

   app.enableShutdownHooks();

   await app.listen(PORT, HOST)
      .then(() => console.info(`App running on ${PORT}`));

   return app;
}
export default bootstrap();
