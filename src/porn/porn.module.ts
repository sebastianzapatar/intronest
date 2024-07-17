import { Module } from '@nestjs/common';
import { PornService } from './porn.service';
import { PornController } from './porn.controller';

@Module({
  controllers: [PornController],
  providers: [PornService],
})
export class PornModule {}
