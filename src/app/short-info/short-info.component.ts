import { Component, OnInit, Input } from '@angular/core';

import { EpisodeService } from '../../services/episode.service';
import { Episode } from '../../shared/episode';
import { Review } from '../../shared/review';
import { ReviewService } from '../../services/review.service';
import { PagedEpisodes } from '../../shared/paged-episodes';
import{visibility, flyInOut, expand} from '../animations/app.animations';

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.scss']
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
export class ShortInfoComponent implements OnInit {
  pagedEpisodes: PagedEpisodes;
  episodes: Episode[];

  @Input()
  selectedEpisode: Episode;

  @Input()
  reviews: Review[];
  errMsg: string;

  constructor(private srvice: EpisodeService,
    private reviewService: ReviewService) { 
    
  }

  ngOnInit() {
    // debugger
    //console.log("Selected Episode is:" , this.selectedEpisode);
    this.srvice.getEpisodes()
    .subscribe((page =>{ 
      this.pagedEpisodes = page;
      this.episodes=page.content;
    }), (someError) => {
      this.errMsg=<any> someError;
    });

  }

}
