import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import { CreateAbilityDto } from './dto/create-ability.dto';
import { Ability } from './entities/ability.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AbilityService {

    constructor(
        @InjectModel(Ability.name)
        private readonly abilityModel: Model<Ability>,
        private readonly commonService: CommonService
    ) { }

    async createAbility(createAbilityDto: CreateAbilityDto) {
        let { name } = createAbilityDto
        try {
            const ability = await this.abilityModel.create({
                name
            });
            return "Creado exitosamente";

        } catch (error) {
            this.commonService.handleExceptions(error);
        }
    }

    async findAll(): Promise<Ability[] | string> {

        const abilities = await this.abilityModel.find();
        if (!abilities.length) return "Ingresar habilidad"
        return abilities

    }
}