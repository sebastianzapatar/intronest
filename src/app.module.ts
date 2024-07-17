import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { PornModule } from './porn/porn.module';

@Module({
  imports: [CarsModule, PornModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
