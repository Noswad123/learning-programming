import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as LanguageModules from './modules';
import * as LanguageEntities from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/programming_languages.db',
      entities: Object.values(LanguageEntities),
      synchronize: true,
      // logging: true,
    }),
    ...Object.values(LanguageModules)
  ],
})
export class AppModule {}
