import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestAdapater } from './request';

@Injectable({
  providedIn: 'root',
})
export class RequestService implements RequestAdapater {
  constructor(private readonly httpClient: HttpClient) {}

  loadAll(): Observable<any> {
    console.log('Request from RequestBrowserService');

    return this.httpClient.get('url-qualque');
  }
}
