import { TestBed } from '@angular/core/testing';

import { RequestMobileService } from './request-mobile.service';

describe('RequestMobileService', () => {
  let service: RequestMobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestMobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
