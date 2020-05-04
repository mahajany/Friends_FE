import { TestBed } from '@angular/core/testing';
import{dummy_data_episodes} from '../shared/dummy-data/episodes';
import { EpisodeService } from './episode.service';
import { Injectable } from '@angular/core';
import { SHORT_DELAY } from '../shared/constants';
import { Episode } from '../shared/episode';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, URL_FRIENDS } from '../shared/baseurl';

import { of, Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { ProcessHttpMessageService } from './process-http-message.service';
import { PagedEpisodes } from '../shared/paged-episodes';



describe('EpisodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpisodeService = TestBed.get(EpisodeService);
    expect(service).toBeTruthy();
  });
});
