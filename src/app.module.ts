import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvironmentVariables, configuration } from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { AbilityController } from './ability/ability.controller';
import { AbilityService } from './ability/ability.service';
import { AbilityModule } from './ability/ability.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      //validationSchema,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService<EnvironmentVariables>) => ({
        uri: config.get<string>('dbUrl'),
      }),
    }),
    PokemonModule,
    AbilityModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
