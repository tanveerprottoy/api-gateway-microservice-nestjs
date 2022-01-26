import { Test, TestingModule } from '@nestjs/testing';
import { GenericServiceService } from './generic-service.service';

describe('GenericServiceService', () => {
  let service: GenericServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenericServiceService],
    }).compile();

    service = module.get<GenericServiceService>(GenericServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
