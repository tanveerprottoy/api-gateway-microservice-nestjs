import { Module } from '@nestjs/common';
import { ServiceClientService } from './service-client.service';
import { ServiceClientController } from './service-client.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'GENERIC_SERVICE',
                transport: Transport.TCP,
                options: {
                    host: '127.0.0.1',
                    port: 3002
                },
            },
        ]),
    ],
  controllers: [ServiceClientController],
  providers: [ServiceClientService]
})
export class ServiceClientModule {}
