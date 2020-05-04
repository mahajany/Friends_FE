import { Component, OnInit } from '@angular/core';

import { Episode } from '../../shared/episode';
import { EpisodeService } from '../../services/episode.service';
import { Review } from '../../shared/review';
import { ReviewService } from '../../services/review.service';
import {of, Observable} from 'rxjs';
import {delay}  from  'rxjs/operators';
import { PagedEpisodes } from '../../shared/paged-episodes';
import{visibility, flyInOut, expand} from '../animations/app.animations';


@Component({
  selector: 'app-episode-info',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
  , host: {
    '[@flyInOut]': 'true',
    'style': 'display:block;'
  }
  , animations:[
    flyInOut(),
    expand(),
    visibility()
  ]

})
export class EpisodesComponent implements OnInit {
  
  pagedEpisodes: PagedEpisodes;
  episodes: Episode[];
  selected: Episode;
  reviews: Review[];
  errMsg: string;
  
  constructor(private srvice: EpisodeService,
    private reviewService: ReviewService) {

  }

  onSelected(e: Episode) {
    this.selected = e;
    this.reviewService.getEpisodeReviews(e)
    .subscribe((result)=>{
      this.reviews = result;
    });
  }
  ngOnInit() {
    this.srvice.getEpisodes()
      .subscribe((pagedResult =>{ 
        this.pagedEpisodes = pagedResult;
        this.episodes = pagedResult.content;
        // console.log("Received Episodes:" + JSON.stringify(this.pagedEpisodes));
      }),someError => this.errMsg=<any> someError);
  }
}
