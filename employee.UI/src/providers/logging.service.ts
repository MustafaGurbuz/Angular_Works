import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    constructor() {
    }

    lg() {
        console.log('logging service');
    }
}
