import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { EpisodeService } from '../../services/episode.service';

import { Episode } from '../../shared/episode';
import { Review } from '../../shared/review';


import { switchMap } from 'rxjs/operators';
import{visibility, flyInOut, expand} from '../animations/app.animations';


@Component({
  selector: 'app-complete-info',
  templateUrl: './complete-info.component.html',
  styleUrls: ['./complete-info.component.scss']
  , host: {
    '[@flyInOut]': 'true',
    '[@expand]': 'true',
    'style': 'display:block;'
  }
  , animations:[
    flyInOut(),
    expand(),
    visibility()
  ]

})
export class CompleteInfoComponent implements OnInit {
  
  episode: Episode;
  episodeCopy: Episode;

  episodeIds: string[];
  prev: string;
  next: string;

  errMsg: string;

  visibility = 'shown';

  constructor(private episodeService: EpisodeService
    , private route: ActivatedRoute
    , private router: Router
    , private location: Location) { 
    }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.loadAllTheIds(id);    
    this.getEpisodeDetails(id);    
    this.route.params.pipe(switchMap((params: Params) => { 
      this.visibility = 'hidden'; 
      return this.episodeService.getEpisode(params['id']); 
      })).subscribe(ep => { 
          // console.log(JSON.stringify(ep));
            this.episode = ep; 
            this.episodeCopy = ep; 
            if(this.episodeIds)
              this.setPrevNext(ep._id); 
            this.visibility = 'shown'; 
          }, errmess => this.errMsg = <any>errmess);
  }

  private loadAllTheIds(id: string) {
    this.episodeService.getEpisodeIds().subscribe((resultIds) => {
      this.episodeIds = resultIds;
      this.setPrevNext(id);


    });
  }

  private getEpisodeDetails(id: string) {
    this.episodeService.getEpisode(id)
      .subscribe((result) => {
        this.episode = result;
      });
  }

  setPrevNext(epId: string) {
    const index = this.episodeIds.indexOf(epId);
    this.prev = this.episodeIds[(this.episodeIds.length + index - 1) % this.episodeIds.length];
    this.next = this.episodeIds[(this.episodeIds.length + index + 1) % this.episodeIds.length];
  }

  goBack() {
    this.location.back();
  }
}
