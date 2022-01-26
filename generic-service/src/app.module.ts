import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenericServiceModule } from './modules/generic-service/generic-service.module';

@Module({
    imports: [
        GenericServiceModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
