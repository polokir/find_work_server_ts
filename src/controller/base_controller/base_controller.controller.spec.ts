import { Test, TestingModule } from '@nestjs/testing';
import { BaseControllerController } from './base_controller.controller';

describe('BaseControllerController', () => {
  let controller: BaseControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseControllerController],
    }).compile();

    controller = module.get<BaseControllerController>(BaseControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
