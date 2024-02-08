import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { AbilityService } from './ability.service';
import { AbilityController } from './ability.controller';
import { CommonModule } from './../common/common.module';
import { Ability, AbilitySchema } from './entities/ability.entity';

@Module({
    imports: [
        MongooseModule.forFeature([
          {
            name: Ability.name,
            schema: AbilitySchema,
          },
        ]),
        CommonModule,
      ],
      providers: [AbilityService],
      controllers: [AbilityController]
})
export class AbilityModule {}
