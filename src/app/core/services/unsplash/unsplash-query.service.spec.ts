import { TestBed } from '@angular/core/testing';

import { UnsplashQueryService } from './unsplash-query.service';

describe('UnsplashQueryService', () => {
  let service: UnsplashQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
