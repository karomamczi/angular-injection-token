import { APP_STORAGE } from './core.module';
import { TestBed } from '@angular/core/testing';

import { MyStorageService } from './my-storage.service';

describe('MyStorageService', () => {
  let service: MyStorageService;
  const storage = {
    setItem: (key: string, value: string) => {},
  };
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: APP_STORAGE,
          useValue: storage
        },
      ]
    });
    service = TestBed.inject(MyStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('saveQuote', () => {
    beforeEach(() => {
      spyOn(storage, 'setItem');
    });

    it('should set item once', () => {
      service.saveQuote();

      expect(storage.setItem).toHaveBeenCalledTimes(1);
    });

    it('should set item with key and value', () => {
      service.saveQuote();

      expect(storage.setItem).toHaveBeenCalledWith('quote', 'Jak to jest być skrybą, dobrze?');
    });
  })
});
