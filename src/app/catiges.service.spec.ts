import { TestBed, inject } from '@angular/core/testing';

import { CatigesService } from './catiges.service';

describe('CatigesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatigesService]
    });
  });

  it('should be created', inject([CatigesService], (service: CatigesService) => {
    expect(service).toBeTruthy();
  }));
});
