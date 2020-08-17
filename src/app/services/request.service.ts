import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { mock } from './mock';
import { RequestAdapater } from './request';


@Injectable({
  providedIn: 'root'
})
export class RequestService implements RequestAdapater {

  constructor() { }

  loadAll(): Observable<any> {
    console.log('Request from RequestService')
    return of(mock)
  }
}
