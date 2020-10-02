import { TestBed } from '@angular/core/testing';

import { UserHttpServiceService } from './user-http-service.service';

describe('UserHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserHttpServiceService = TestBed.get(UserHttpServiceService);
    expect(service).toBeTruthy();
  });
});
