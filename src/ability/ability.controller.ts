import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
	UseGuards,
} from '@nestjs/common';
import { CreateAbilityDto } from './dto/create-ability.dto';
import { AbilityService } from './ability.service';

@Controller('ability')
export class AbilityController {
    constructor(private readonly abilityService: AbilityService) { }

	@Post()
	//@Auth(Role.admin, Role.person)
	create(@Body() createAbilityDto: CreateAbilityDto) {
		return this.abilityService.createAbility(createAbilityDto);
	}

	@Get()
	findAll() {
		return this.abilityService.findAll();
	}
}
