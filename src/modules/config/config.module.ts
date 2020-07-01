import { ConfigModule } from '@nestjs/config';
import Joi from '@hapi/joi';
import path from 'path';

const NODE_ENV = process.env.NODE_ENV || 'development';
const modeConfigPostfix = NODE_ENV === 'production'
   ? ''
   : `.${NODE_ENV}`;

export const configModule = ConfigModule.forRoot({
   isGlobal: true,
   envFilePath: path.join(process.cwd(), 'env', `.env${modeConfigPostfix}`),
   validationSchema: Joi.object({
      NODE_ENV: Joi.string()
         .valid('development', 'production', 'test')
         .default('development'),
      PORT: Joi.number().integer().positive().min(1001).max(9999),
      HOST: Joi.string(),
      DB_PORT: Joi.number().integer().positive(),
      DB_HOST: Joi.string(),
      DB_USER: Joi.string(),
      DB_PASS: Joi.string(),
      DB_NAME: Joi.string(),
   }),
});