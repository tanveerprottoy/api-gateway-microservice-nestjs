import { Injectable } from '@nestjs/common';
@Injectable()
export class GenericServiceService {

    receive(data: string): string {
        const appended = data + ' from microservice'
        return appended;
    }

    add(data: number[]): number {
        return (data || []).reduce((a, b) => a + b);
    }
}
