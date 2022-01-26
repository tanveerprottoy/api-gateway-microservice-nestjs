import { Module } from '@nestjs/common';
import { GenericServiceService } from './generic-service.service';
import { GenericServiceController } from './generic-service.controller';

@Module({
  controllers: [GenericServiceController],
  providers: [GenericServiceService]
})
export class GenericServiceModule {}
