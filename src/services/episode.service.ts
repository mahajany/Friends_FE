import { Injectable } from '@angular/core';
import { SHORT_DELAY } from '../shared/constants';
import { Episode } from '../shared/episode';
// import { dummy_data_episodes } from '../shared/dummy-data/episodes';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, URL_FRIENDS } from '../shared/baseurl';

import { of, Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { ProcessHttpMessageService } from './process-http-message.service';
import { PagedEpisodes } from '../shared/paged-episodes';


@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private episodes: Episode[];
  constructor(private http: HttpClient, 
    private procesHttpMsgService: ProcessHttpMessageService) {
  }

  getEpisodes(): Observable<PagedEpisodes> {
    return this.http.get<PagedEpisodes>(BASE_URL + "/friends")
    .pipe( retry(2), 
    catchError(this.procesHttpMsgService.handleError));
  }


  getEpisodesArray(): Observable<Episode[]> {

    return this.http.get<Episode[]>(BASE_URL + "/random")
      .pipe(catchError(this.procesHttpMsgService.handleError));
  }

  getEpisode(_id: string): Observable<Episode> {
    // return of(this.episodes.filter((ep) => (ep._id === _id))[0])
    return this.http.get<Episode>(URL_FRIENDS + "/" + _id)    
      .pipe(catchError(this.procesHttpMsgService.handleError));

  }

  getSeason(season: number): Observable<Episode[]> {
    return this.http.get<Episode[]>(BASE_URL + "/season/" + season)
      .pipe(catchError(this.procesHttpMsgService.handleError));
  }

  getFirst(): Observable<Episode> {
    // return this.episodes.filter(ep => ep)[0];
    //return this.episodes.filter((ep) => (ep.id === 1))[0];
    // return Promise.resolve(this.episodes[0]);
    return of(this.episodes[0]);

  }

  getEpisodeIds(): Observable<string[] | any> {
    // return of(this.episodes.map(ep => ep._id));
    // return this.getEpisodes().pipe(map(results => results.map( eachEpisode=> eachEpisode.id)));

    // return this.getEpisodes()
    // .pipe(map(results => results.content.map(eachEpisode => eachEpisode.id)))
    //   .pipe(catchError(error => error)); //Won't needed as it will be dealth with the serivce etc.

    return this.http.get<string[]>(URL_FRIENDS + "/allids")
    .pipe(catchError(this.procesHttpMsgService.handleError));

  }

}
