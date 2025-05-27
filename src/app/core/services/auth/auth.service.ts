import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    getAccessKey() {
        return environment.access_key;
    }
}
