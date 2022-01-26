import { Controller, Post } from '@nestjs/common';
import { ServiceClientService } from './service-client.service';
import { Constants } from '../../utils/constants';

@Controller({
    path: 'service-client',
    version: Constants.API_VERSION_1
})
export class ServiceClientController {

    constructor(private readonly serviceClientService: ServiceClientService) { }

    @Post('send-numbers')
    async sendNumbers() {
        return await this.serviceClientService.sendNumbers();
    }

    @Post('send-string')
    async sendString() {
        return await this.serviceClientService.sendString();
    }
}
