import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ServiceClientService {

    constructor(
        @Inject('GENERIC_SERVICE')
        private client: ClientProxy,
    ) { }

    async sendNumbers(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.client
                .send<number, number[]>(
                    'add',
                    [1, 2, 3]
                )
                .subscribe({
                    next: result => {
                        Logger.log(result);
                        const data = {
                            sum: result
                        }
                        resolve(data);
                    },
                    error: err => {
                        Logger.error(err);
                        reject(err);
                    },
                    complete: () => Logger.debug('complete')
                });
        });
    }

    async sendString(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.client
                .send<string, string>(
                    'message',
                    'hello'
                )
                .subscribe({
                    next: result => {
                        Logger.log(result);
                        const data = {
                            message: result
                        }
                        resolve(data);
                    },
                    error: err => {
                        Logger.error(err);
                        reject(err);
                    },
                    complete: () => Logger.debug('complete')
                });
        });
    }
}
