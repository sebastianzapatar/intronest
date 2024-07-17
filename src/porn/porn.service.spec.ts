import { Test, TestingModule } from '@nestjs/testing';
import { PornService } from './porn.service';

describe('PornService', () => {
  let service: PornService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PornService],
    }).compile();

    service = module.get<PornService>(PornService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
