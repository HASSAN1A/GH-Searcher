import { TestBed } from '@angular/core/testing';

import { RepoHttpServiceService } from './repo-http-service.service';

describe('RepoHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoHttpServiceService = TestBed.get(RepoHttpServiceService);
    expect(service).toBeTruthy();
  });
});
