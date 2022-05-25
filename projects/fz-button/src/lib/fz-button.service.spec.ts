import { TestBed } from '@angular/core/testing';

import { FzButtonService } from './fz-button.service';

describe('FzButtonService', () => {
  let service: FzButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FzButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
