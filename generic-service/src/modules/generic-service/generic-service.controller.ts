import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Constants } from '../../utils/constants';
import { GenericServiceService } from './generic-service.service';

@Controller({
    path: 'generic-service',
    version: Constants.API_VERSION_1
})
export class GenericServiceController {

    constructor(private readonly genericServiceService: GenericServiceService) { }

    @MessagePattern('message')
    receive(data: string) {
        Logger.debug(
            data
        );
        return this.genericServiceService.receive(data);
    }

    @MessagePattern('add')
    add(data: number[]): number {
        return this.genericServiceService.add(data);
    }
}
