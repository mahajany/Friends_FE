import { Injectable } from '@angular/core';
import { Review } from '../shared/review';
// import { dummy_review_data } from '../shared/dummy-data/reviews';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Episode } from '../shared/episode';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BASE_URL } from '../shared/baseurl';

import { ProcessHttpMessageService } from './process-http-message.service';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private http: HttpClient,
    private procesHttpMsgService: ProcessHttpMessageService) {
  }

  // getEpisodeReviews(e: Episode): Promise<Review[]> {
  //   return Promise.resolve(dummy_review_data.filter((r) => e.id === r.episode));
  // }

  getEpisodeReviews(e: Episode): Observable<Review[]> {
    // return of(dummy_review_data.filter((r) => e.id === r.episode));
    return this.http.get<Review[]>(BASE_URL + "/reviews/" + e._id)
      .pipe(catchError(this.procesHttpMsgService.handleError));

  }

  putReview(review: Review): Observable<Review> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put<Review>(BASE_URL + 'reviews/' + review._id, review, httpOptions)
      .pipe(catchError(this.procesHttpMsgService.handleError));
  }
}