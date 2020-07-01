import { Controller, Get } from '@nestjs/common';


@Controller('todo')
export class TodoController {

   @Get('/')
   public index(): string
   {
      return 'nice!';
   }
}
