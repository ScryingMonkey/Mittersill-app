import { TestBed, inject } from '@angular/core/testing';

import { HubServiceService } from './hub-service.service';

describe('HubServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HubServiceService]
    });
  });

  it('should ...', inject([HubServiceService], (service: HubServiceService) => {
    expect(service).toBeTruthy();
  }));
});
