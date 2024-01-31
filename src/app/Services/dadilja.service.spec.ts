import { TestBed } from '@angular/core/testing';

import { DadiljaService } from './dadilja.service';

describe('DadiljaService', () => {
  let service: DadiljaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadiljaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
