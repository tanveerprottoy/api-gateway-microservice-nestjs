import { Test, TestingModule } from '@nestjs/testing';
import { GenericServiceController } from './generic-service.controller';
import { GenericServiceService } from './generic-service.service';

describe('GenericServiceController', () => {
  let controller: GenericServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenericServiceController],
      providers: [GenericServiceService],
    }).compile();

    controller = module.get<GenericServiceController>(GenericServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
