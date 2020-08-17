import { TestBed } from '@angular/core/testing';

import { RequestBrowserService } from './request-browser.service';

describe('RequestBrowserService', () => {
  let service: RequestBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
