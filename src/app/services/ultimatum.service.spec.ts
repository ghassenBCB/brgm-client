import { TestBed } from '@angular/core/testing';

import { UltimatumService } from './ultimatum.service';

describe('UltimatumServiceService', () => {
  let service: UltimatumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UltimatumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
