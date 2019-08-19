import { TestBed } from '@angular/core/testing';

import { AudioretrieverService } from './audioretriever.service';

describe('AudioretrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioretrieverService = TestBed.get(AudioretrieverService);
    expect(service).toBeTruthy();
  });
});
