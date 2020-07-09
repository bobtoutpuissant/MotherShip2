import { TestBed } from '@angular/core/testing';

import { GetCardInfoService } from './get-card-info.service';

describe('GetCardInfoService', () => {
  let service: GetCardInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCardInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
