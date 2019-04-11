import { TestBed, inject } from '@angular/core/testing';

import { MoviePlayerService } from '../../service/movie-player/movie-player.service';

describe('MoviePlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviePlayerService]
    });
  });

  it('should be created', inject([MoviePlayerService], (service: MoviePlayerService) => {
    expect(service).toBeTruthy();
  }));
});
