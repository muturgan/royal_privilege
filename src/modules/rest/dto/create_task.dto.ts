import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateSubTaskDto } from './create_sub_task.dto';
import { INewTaskArgument, INewSubTaskArgument } from '../../../domain/entities';


export class CreateTaskDto implements INewTaskArgument
{
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   public readonly title!: string;


   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   public readonly description!: string;


   @ApiPropertyOptional({
      type: [CreateSubTaskDto],
   })
   @IsOptional()
   @ValidateNested({each: true})
   public readonly subTasks?: INewSubTaskArgument[];
}
