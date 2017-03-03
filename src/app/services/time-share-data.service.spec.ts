import { TestBed, inject } from '@angular/core/testing';

import { TimeShareDataService } from './time-share-data.service';

describe('TimeShareDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeShareDataService]
    });
  });

  it('should ...', inject([TimeShareDataService], (service: TimeShareDataService) => {
    expect(service).toBeTruthy();
  }));
});
