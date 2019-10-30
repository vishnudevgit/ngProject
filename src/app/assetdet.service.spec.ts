import { TestBed } from '@angular/core/testing';

import { AssetdetService } from './assetdet.service';

describe('AssetdetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetdetService = TestBed.get(AssetdetService);
    expect(service).toBeTruthy();
  });
});
