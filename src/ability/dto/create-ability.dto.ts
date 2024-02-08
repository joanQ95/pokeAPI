import {
    IsNumber,
    IsIn,
    Min,
    Max,
    IsOptional,
    IsMongoId,
    IsString,
    IsArray, 
    ValidateNested,
    IsBoolean  
} from 'class-validator';

import { Type } from 'class-transformer';

export class CreateAbilityDto {

    @IsString()
    name: string;
 
    @IsBoolean()   
    @IsOptional()   
    is_hidden: boolean;

    @IsNumber() 
    slot: number;
  
    @IsNumber()   
    _id_: number;
}