import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';
import { INewSubTaskArgument } from '../../../domain/entities';


export class CreateSubTaskDto implements INewSubTaskArgument
{
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   public readonly title!: string;

   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   public readonly description!: string;

   @ApiPropertyOptional()
   @IsOptional()
   @IsBoolean()
   public readonly isActive?: boolean;

   @ApiPropertyOptional()
   @IsOptional()
   @IsBoolean()
   public readonly done?: boolean;
}
