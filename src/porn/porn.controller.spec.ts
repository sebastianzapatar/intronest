import { Test, TestingModule } from '@nestjs/testing';
import { PornController } from './porn.controller';
import { PornService } from './porn.service';

describe('PornController', () => {
  let controller: PornController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PornController],
      providers: [PornService],
    }).compile();

    controller = module.get<PornController>(PornController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
