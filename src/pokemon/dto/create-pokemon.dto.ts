import {
    IsNumber,
    IsIn,
    Min,
    Max,
    IsOptional,
    IsMongoId,
    IsString,
    IsArray, 
    ValidateNested 
} from 'class-validator';

import { Type } from 'class-transformer';



export class CreatePokemonDto {

    @IsString()
    name: string;

    @IsString()
    order: number;

    @IsString()
    @IsMongoId()
    idAbilityAsoc: string;

}
