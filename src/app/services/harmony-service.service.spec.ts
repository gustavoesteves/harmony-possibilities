import { TestBed } from '@angular/core/testing';

import { HarmonyServiceService } from './harmony-service.service';

describe('HarmonyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HarmonyServiceService = TestBed.get(HarmonyServiceService);
    expect(service).toBeTruthy();
  });
});
