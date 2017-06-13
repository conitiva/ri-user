import { TestBed, inject } from '@angular/core/testing';

import { RiUserService } from './ri-user.service';

describe('RiUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiUserService]
    });
  });

  it('should be created', inject([RiUserService], (service: RiUserService) => {
    expect(service).toBeTruthy();
  }));
});
