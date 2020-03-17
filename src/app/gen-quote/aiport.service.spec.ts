import { TestBed } from '@angular/core/testing';

import { AiportService } from './aiport.service';

describe('AiportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AiportService = TestBed.get(AiportService);
    expect(service).toBeTruthy();
  });
});
