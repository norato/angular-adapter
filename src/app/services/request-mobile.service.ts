import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { RequestAdapater } from './request';

@Injectable({
  providedIn: 'root',
})
export class RequestService implements RequestAdapater {
  constructor() {}

  loadAll(): Observable<any> {
    console.log('Request from RequestMobileService');

    return from(window.fetch(''));
  }
}
